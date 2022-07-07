module.exports = {
  extends: ["@commitlint/config-conventional", "cz"],
  rules: {
    "type-enum": [
      2,
      "always",
      [
        "feature", // 新功能（feature）
        "bug",
        "fix", // 修复bug
        "ui", // 更新UI
        "docs", // 文档
        "style", // 样式修改
        "perf", // 性能优化
        "release", // 发布
        "deploy", // 部署
        "refactor", // 重构，既不是新增功能也不是修复bug
        "test", // 增加测试
        "chore", // 构建过程或辅助工具的变动
        "revert", // feat(pencil): add ‘graphiteWidth’ option (撤销之前的commit)
        "merge", // 合并分支， 如：merge（前端页面）：feature-1管理员新增
        "build", // 打包
      ],
    ],
    "type-case": [2, "always", "lower-case"], // <type> 格式 小写
    "type-empty": [2, "never"], // <type> 不能为空
    "scope-empty": [0], // <scope> 范围不能为空
    "scope-case": [0], // <scope> 范围格式
    "subject-empty": [2, "never"], // 主要message不能为空
    "subject-full-stop": [0, "never"], // 以什么为结束标志，禁用
    "subject-case": [0, "never"], // <subject> 格式，禁用
    "body-leading-blank": [1, "always"], // <body> 以空行开头
    "header-max-length": [0, "always", 72],
  },
};
