# Test Action JUnit Report

一个用于测试 CI review 的简单 Maven 项目，包含 JUnit 测试用例。

## 项目结构

标准的 Maven 多模块结构：

```
test-action-junit-report/          (父模块)
├── pom.xml                        (父 POM - 定义模块和依赖管理)
├── backend/                       (后端模块)
│   ├── pom.xml                    (后端模块 POM)
│   └── src/
│       ├── main/java/com/example/
│       │   ├── Calculator.java
│       │   └── StringUtils.java
│       └── test/java/com/example/
│           ├── CalculatorTest.java
│           └── StringUtilsTest.java
└── frontend/                      (前端模块)
    ├── pom.xml                    (前端模块 POM)
    ├── package.json
    ├── tsconfig.json
    ├── jest.config.js
    └── src/
        ├── Calculator.ts
        ├── Calculator.test.ts
        ├── StringHelper.ts
        ├── StringHelper.test.ts
        ├── ArrayUtils.ts
        └── ArrayUtils.test.ts
```

## 功能说明

### Calculator 类
- `add(int a, int b)` - 加法运算
- `subtract(int a, int b)` - 减法运算
- `multiply(int a, int b)` - 乘法运算
- `divide(int a, int b)` - 除法运算
- `isEven(int number)` - 判断是否为偶数

### StringUtils 类
- `reverse(String input)` - 反转字符串
- `isPalindrome(String input)` - 判断是否为回文
- `countVowels(String input)` - 统计元音字母数量

## 构建和测试

### 编译项目
```bash
mvn clean compile
```

### 运行测试
```bash
mvn test
```

### 打包项目
```bash
mvn package
```

## 测试覆盖

项目包含 16 个 JUnit 5 测试用例，覆盖了所有主要功能和边界情况。

## 技术栈

### 后端
- Java 11
- Maven 3.x
- JUnit 5.9.3
- Maven Surefire Plugin (生成测试报告)
- Maven Surefire Report Plugin (生成 HTML 测试报告)

### 前端
- TypeScript 5.3.3
- Node.js 18.x
- Jest 29.7.0 (测试框架)
- jest-junit (生成 JUnit XML 报告)

## 测试报告

### Java (Surefire Reports)

运行测试后，Surefire 插件会生成以下报告：

1. **XML 报告**: `target/surefire-reports/*.xml` - JUnit XML 格式，用于 CI 工具
2. **HTML 报告**: `target/site/surefire-report.html` - 可视化测试报告

生成 HTML 报告：
```bash
mvn test
mvn surefire-report:report
```

### TypeScript (Jest Reports)

运行测试后，Jest 会生成：

1. **JUnit XML**: `frontend/test-results/junit.xml` - 用于 CI 工具
2. **Coverage 报告**: `frontend/coverage/` - 代码覆盖率报告

前端测试：
```bash
cd frontend
npm install
npm test
```

## 完整构建和测试

### 构建所有模块（在根目录执行）：
```bash
# 构建所有模块
mvn clean install

# 只运行测试
mvn clean test

# 生成测试报告
mvn surefire-report:report
```

### 单独构建某个模块：
```bash
# 只构建后端
mvn clean test -pl backend

# 只构建前端
mvn clean test -pl frontend
```

### Maven 多模块执行流程：
1. 父 POM 定义所有子模块
2. 按顺序构建每个模块：backend → frontend
3. Backend: 编译 Java 代码 → 运行 JUnit 测试 → 生成 Surefire 报告
4. Frontend: 安装 Node.js/npm → npm install → 构建 TypeScript → 运行 Jest 测试
5. 生成所有测试报告

## 🔄 GitHub Actions CI/CD

项目配置了 GitHub Actions workflow 来自动运行测试：

### Frontend Test Workflow (`.github/workflows/frontend-test.yml`)

**触发条件**：
- Push 到 `main` 或 `develop` 分支
- Pull Request 到 `main` 或 `develop` 分支
- 手动触发

**功能**：
1. ✅ 运行前端 TypeScript 测试（Jest）
2. 📊 使用 `mikepenz/action-junit-report` 发布测试报告
3. 📁 上传 Surefire HTML 报告为 artifact
4. 💬 在 PR 中自动评论测试结果摘要

**查看测试报告**：
- 在 PR 的 **Checks** 标签页查看测试结果
- 在 Actions 页面下载完整的 HTML 报告（artifact: `frontend-surefire-report`）