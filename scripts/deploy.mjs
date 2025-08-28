// scripts/deploy.mjs
import { execSync } from "node:child_process";

function run(cmd, inherit = true) {
    try {
        return execSync(cmd, { stdio: inherit ? "inherit" : "pipe" });
    } catch (e) {
        throw e;
    }
}

function runGet(cmd) {
    return execSync(cmd, { stdio: "pipe" }).toString().trim();
}

function nowStamp() {
    const d = new Date();
    const pad = (n) => String(n).padStart(2, "0");
    return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
}

try {
    // 1) 确认在一个 Git 仓库里
    run("git rev-parse --is-inside-work-tree", false);

    // 2) 确认当前分支名
    let branch = runGet("git rev-parse --abbrev-ref HEAD");
    if (!branch || branch === "HEAD") branch = "main";

    // 3) 收集工作区变更
    const status = runGet("git status --porcelain");

    // 4) 统一 add
    run("git add -A");

    // 5) 生成提交信息（支持 npm run deploy -- "你的提交信息"）
    const userMsg = process.argv.slice(2).join(" ").trim();
    const msg = userMsg || `chore: auto deploy ${nowStamp()}`;

    // 6) 有变更就提交；没变更就跳过 commit
    if (status.length > 0) {
        const safeMsg = msg.replace(/"/g, '\\"');
        run(`git commit -m "${safeMsg}"`);
    } else {
        console.log("👉 没有代码变更需要提交，直接尝试推送最新分支。");
    }

    // 7) 推送（若未设 upstream，自动加上 -u origin HEAD）
    try {
        run("git push");
    } catch {
        console.log("没有上游分支，尝试设置 upstream...");
        run("git push -u origin HEAD");
    }

    console.log(`✅ 已推送到远端分支：${branch}。Vercel 将自动构建并上线。`);
} catch (err) {
    console.error("❌ 部署脚本失败：", err.message || err);
    process.exit(1);
}
