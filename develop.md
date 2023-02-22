# 开发详细流程

## 初始化

项目需要 node 版本在 16 或 16 以上.并且安装 vite 和 pnpm.

```
pnpm create vite react-admin-antd --template react-ts
```

## 链接远程仓库

```
git init
git add .
git commit -m "feat: 项目初始化"
git remote add origin https://github.com/xxx/xxx.git

git push -u origin master
```

## 环境变量配置

新增文件`.env`, `.env.development`, `.env.production`, `.env.test`.
// .env

```env
# title
VITE_GLOB_APP_TITLE = 'React-Admin-Antd'

# port
VITE_PORT = 3301

# open 运行 npm run dev 时自动打开浏览器
VITE_OPEN = true

# 是否生成包预览文件
VITE_REPORT = false

# 是否开启gzip压缩
VITE_BUILD_GZIP = false

# 是否删除生产环境 console
VITE_DROP_CONSOLE = true
```

// .env.development

```
# 本地环境
NODE_ENV = 'development'

# 本地环境接口地址
VITE_API_URL = '/api'
```

// .env.production

```
# 线上环境
NODE_ENV = "production"

# 线上环境接口地址
VITE_API_URL = "https://mock.mengxuegu.com/mock/62abda3212c1416424630a45"
```

// .env.test

```
# 测试环境
NODE_ENV = "test"

# 测试环境接口地址
VITE_API_URL = "https://mock.mengxuegu.com/mock/62abda3212c1416424630a45"
```

### 增加全局声明文件

新建`src/typings/global.d.ts`

```ts
// * Menu
declare namespace Menu {
	interface MenuOptions {
		path: string;
		title: string;
		icon?: string;
		isLink?: string;
		close?: boolean;
		children?: MenuOptions[];
	}
}

// * Vite
declare type Recordable<T = any> = Record<string, T>;

declare interface ViteEnv {
	VITE_API_URL: string;
	VITE_PORT: number;
	VITE_OPEN: boolean;
	VITE_GLOB_APP_TITLE: string;
	VITE_DROP_CONSOLE: boolean;
	VITE_PROXY_URL: string;
	VITE_BUILD_GZIP: boolean;
	VITE_REPORT: boolean;
}
```

## 安装格式化配置工具

需要安装的工具有: eslint, stylelint, prettier, postcss, husky, lint-staged.

下面是安装流程,也可以参考该方案

[十分钟搭建一个 Vite+React+TS+ESLint+Prettier+Husky+Commitlint 项目](https://juejin.cn/post/7123612981895626760)

或者懒人配置,[点这里一键配置](https://github.com/lyh0371/web-norm)

### ESLint

用于检查 js 代码错误.安装 vscode 插件 ESLint

```
pnpm create @eslint/config
```

该命令会自动生成配置文件`.eslintrc.cjs`.

#### 规则配置

```js
// @see: http://eslint.cn

module.exports = {
	settings: {
		react: {
			version: "detect"
		}
	},
	root: true,
	env: {
		browser: true,
		node: true,
		es6: true
	},
	/* 指定如何解析语法 */
	parser: "@typescript-eslint/parser",
	/* 优先级低于 parse 的语法解析配置 */
	parserOptions: {
		ecmaVersion: 2020,
		sourceType: "module",
		jsxPragma: "React",
		ecmaFeatures: {
			jsx: true
		}
	},
	plugins: ["react", "@typescript-eslint", "react-hooks", "prettier"],
	/* 继承某些已有的规则 */
	extends: [
		"eslint:recommended",
		"plugin:react/recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:react/jsx-runtime",
		"plugin:react-hooks/recommended",
		"prettier",
		"plugin:prettier/recommended"
	],
	/*
	 * "off" 或 0    ==>  关闭规则
	 * "warn" 或 1   ==>  打开的规则作为警告（不影响代码执行）
	 * "error" 或 2  ==>  规则作为一个错误（代码不能执行，界面报错）
	 */
	rules: {
		// eslint (http://eslint.cn/docs/rules)
		"no-var": "error", // 要求使用 let 或 const 而不是 var
		"no-multiple-empty-lines": ["error", { max: 1 }], // 不允许多个空行
		"no-use-before-define": "off", // 禁止在 函数/类/变量 定义之前使用它们
		"prefer-const": "off", // 此规则旨在标记使用 let 关键字声明但在初始分配后从未重新分配的变量，要求使用 const
		"no-irregular-whitespace": "off", // 禁止不规则的空白

		// typeScript (https://typescript-eslint.io/rules)
		"@typescript-eslint/no-unused-vars": "error", // 禁止定义未使用的变量
		"@typescript-eslint/no-inferrable-types": "off", // 可以轻松推断的显式类型可能会增加不必要的冗长
		"@typescript-eslint/no-namespace": "off", // 禁止使用自定义 TypeScript 模块和命名空间。
		"@typescript-eslint/no-explicit-any": "off", // 禁止使用 any 类型
		"@typescript-eslint/ban-ts-ignore": "off", // 禁止使用 @ts-ignore
		"@typescript-eslint/ban-types": "off", // 禁止使用特定类型
		"@typescript-eslint/explicit-function-return-type": "off", // 不允许对初始化为数字、字符串或布尔值的变量或参数进行显式类型声明
		"@typescript-eslint/no-var-requires": "off", // 不允许在 import 语句中使用 require 语句
		"@typescript-eslint/no-empty-function": "off", // 禁止空函数
		"@typescript-eslint/no-use-before-define": "off", // 禁止在变量定义之前使用它们
		"@typescript-eslint/ban-ts-comment": "off", // 禁止 @ts-<directive> 使用注释或要求在指令后进行描述
		"@typescript-eslint/no-non-null-assertion": "off", // 不允许使用后缀运算符的非空断言(!)
		"@typescript-eslint/explicit-module-boundary-types": "off", // 要求导出函数和类的公共类方法的显式返回和参数类型

		// react (https://github.com/jsx-eslint/eslint-plugin-react)
		"react-hooks/rules-of-hooks": "off",
		"react-hooks/exhaustive-deps": "off"
	}
};
```

#### .eslintignore 规则

创建`.eslintignore`文件.

```
*.sh
node_modules
*.md
*.woff
*.ttf
.vscode
.idea
dist
/public
/docs
.husky
.local
/bin
.eslintrc.js
.prettierrc.js
/src/mock/*
```

`package.json`文件中`scripts`下添加 node 命令

```json
"scripts": {
    "dev": "vite",
    "serve": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview",
    "lint:eslint": "eslint --fix --ext .js,.ts,.tsx ./src",
}
```

### Prettier

安装 vscode 插件 Prettier
用于格式化代码.

```
pnpm add prettier eslint-plugin-prettier eslint-config-prettier eslint-plugin-react eslint-plugin-react-hooks -D
```

创建`.prettierrc.js`.

#### 规则配置

```js
// @see: https://www.prettier.cn
module.exports = {
	// 超过最大值换行
	printWidth: 130,
	// 缩进字节数
	tabWidth: 2,
	// 使用制表符而不是空格缩进行
	useTabs: true,
	// 结尾不用分号(true有，false没有)
	semi: true,
	// 使用单引号(true单双引号，false双引号)
	singleQuote: false,
	// 更改引用对象属性的时间 可选值"<as-needed|consistent|preserve>"
	quoteProps: "as-needed",
	// 在对象，数组括号与文字之间加空格 "{ foo: bar }"
	bracketSpacing: true,
	// 多行时尽可能打印尾随逗号。（例如，单行数组永远不会出现逗号结尾。） 可选值"<none|es5|all>"，默认none
	trailingComma: "none",
	// 在JSX中使用单引号而不是双引号
	jsxSingleQuote: false,
	//  (x) => {} 箭头函数参数只有一个时是否要有小括号。avoid：省略括号 ,always：不省略括号
	arrowParens: "avoid",
	// 如果文件顶部已经有一个 doclock，这个选项将新建一行注释，并打上@format标记。
	insertPragma: false,
	// 指定要使用的解析器，不需要写文件开头的 @prettier
	requirePragma: false,
	// 默认值。因为使用了一些折行敏感型的渲染器（如GitHub comment）而按照markdown文本样式进行折行
	proseWrap: "preserve",
	// 在html中空格是否是敏感的 "css" - 遵守CSS显示属性的默认值， "strict" - 空格被认为是敏感的 ，"ignore" - 空格被认为是不敏感的
	htmlWhitespaceSensitivity: "css",
	// 换行符使用 lf 结尾是 可选值"<auto|lf|crlf|cr>"
	endOfLine: "auto",
	// 这两个选项可用于格式化以给定字符偏移量（分别包括和不包括）开始和结束的代码
	rangeStart: 0,
	rangeEnd: Infinity,
	// Vue文件脚本和样式标签缩进
	vueIndentScriptAndStyle: false
};
```

#### .prettierignore 规则

创建`.prettierignore`文件.

```
/dist/*
.local
/node_modules/**

**/*.svg
**/*.sh

/public/*
```

`package.json`文件中`scripts`下添加 node 命令

```json
"scripts": {
    "dev": "vite",
    "serve": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview",
    "lint:eslint": "eslint --fix --ext .js,.ts,.tsx ./src",
    "lint:prettier": "prettier --write --loglevel warn \"src/**/*.{js,ts,json,tsx,css,less,scss,html,md}\"",
}
```

### stylelint

用于检查 css 语法错误.安装 vscode 插件 Stylelint

```
pnpm add stylelint postcss less autoprefixer stylelint-config-prettier stylelint-config-recommended-less stylelint-config-recess-order stylelint-config-standard stylelint-less -D
```

#### 规则配置

新建`.stylelintrc.js`.

```js
// @see: https://stylelint.io

module.exports = {
	extends: [
		"stylelint-config-standard", // 配置stylelint拓展插件
		"stylelint-config-prettier", // 配置stylelint和prettier兼容
		"stylelint-config-recess-order" // 配置stylelint css属性书写顺序插件,
	],
	plugins: ["stylelint-less"], // 配置stylelint less拓展插件
	rules: {
		indentation: null, // 指定缩进空格
		"no-descending-specificity": null, // 禁止在具有较高优先级的选择器后出现被其覆盖的较低优先级的选择器
		"function-url-quotes": "always", // 要求或禁止 URL 的引号 "always(必须加上引号)"|"never(没有引号)"
		"string-quotes": "double", // 指定字符串使用单引号或双引号
		"unit-case": null, // 指定单位的大小写 "lower(全小写)"|"upper(全大写)"
		"color-hex-case": "lower", // 指定 16 进制颜色的大小写 "lower(全小写)"|"upper(全大写)"
		"color-hex-length": "long", // 指定 16 进制颜色的简写或扩写 "short(16进制简写)"|"long(16进制扩写)"
		"rule-empty-line-before": "never", // 要求或禁止在规则之前的空行 "always(规则之前必须始终有一个空行)"|"never(规则前绝不能有空行)"|"always-multi-line(多行规则之前必须始终有一个空行)"|"never-multi-line(多行规则之前绝不能有空行。)"
		"font-family-no-missing-generic-family-keyword": null, // 禁止在字体族名称列表中缺少通用字体族关键字
		"block-opening-brace-space-before": "always", // 要求在块的开大括号之前必须有一个空格或不能有空白符 "always(大括号前必须始终有一个空格)"|"never(左大括号之前绝不能有空格)"|"always-single-line(在单行块中的左大括号之前必须始终有一个空格)"|"never-single-line(在单行块中的左大括号之前绝不能有空格)"|"always-multi-line(在多行块中，左大括号之前必须始终有一个空格)"|"never-multi-line(多行块中的左大括号之前绝不能有空格)"
		"property-no-unknown": null, // 禁止未知的属性(true 为不允许)
		"no-empty-source": null, // 禁止空源码
		"declaration-block-trailing-semicolon": null, // 要求或不允许在声明块中使用尾随分号 string："always(必须始终有一个尾随分号)"|"never(不得有尾随分号)"
		"selector-class-pattern": null, // 强制选择器类名的格式
		"value-no-vendor-prefix": null, // 关闭 vendor-prefix(为了解决多行省略 -webkit-box)
		"at-rule-no-unknown": null,
		"selector-pseudo-class-no-unknown": [
			true,
			{
				ignorePseudoClasses: ["global", "v-deep", "deep"]
			}
		]
	}
};
```

#### .stylelintignore 规则

```
/dist/*
/public/*
public/*
```

`package.json`文件中`scripts`下添加 node 命令

```json
"scripts": {
    "dev": "vite",
    "serve": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview",
    "lint:eslint": "eslint --fix --ext .js,.ts,.tsx ./src",
    "lint:prettier": "prettier --write --loglevel warn \"src/**/*.{js,ts,json,tsx,css,less,scss,html,md}\"",
    "lint:stylelint": "stylelint --cache --fix \"**/*.{less,postcss,css,scss}\" --cache --cache-location node_modules/.cache/stylelint/",

}
```

#### 修改设置

在.vscode/settings.json 中添加一下规则

```json
{
  // 开启自动修复
  "editor.codeActionsOnSave": {
    "source.fixAll": false,
    "source.fixAll.eslint": true,
+   "source.fixAll.stylelint": true
  },
  // 保存的时候自动格式化
  "editor.formatOnSave": true,
  // 默认格式化工具选择prettier
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  // 配置该项，新建文件时默认就是space：2
  "editor.tabSize": 2,
  // stylelint校验的文件格式
+ "stylelint.validate": ["css", "less", "vue", "html"]
}
```

## 代码提交检查

### Husky(哈士奇)

```
pnpm add husky -D
```

package.json 添加脚本命令

```json
{
	"scripts": {
		"prepare": "husky install"
	}
}
```

执行命令

```
pnpm prepare && pnpm husky add .husky/pre-commit "pnpm lint:lint-staged"
```

执行完上面的命令后，会在.husky 目录下生成一个 pre-commit 文件

现在当我们执行`git commit`的时候就会执行`pnpm lint`的三个代码，当这两条命令出现报错，就不会提交成功。以此来保证提交代码的质量和格式。

### lint-staged

每次提交都检测所有代码并不是一个好的决定，比如你只修改了文件 A 结果文件 B 报错了，但是文件 B 并不是你负责的模块，emmm 改还是不改？

我们可以通过 lint-staged 只对暂存区的代码进行检验。

```
pnpm add lint-staged -D
```

添加 package.json 配置

```json
{
	"lint-staged": "lint-staged"
}
```

新建`.lintstagedrc.js`

```js
module.exports = {
	"*.{js,jsx,ts,tsx}": ["eslint --fix", "prettier --write"],
	"{!(package)*.json,*.code-snippets,.!(browserslist)*rc}": ["prettier --write--parser json"],
	"package.json": ["prettier --write"],
	"*.{scss,less,styl}": ["stylelint --fix", "prettier --write"],
	"*.md": ["prettier --write"]
};
```

现在我们每次提交代码前都会对改动的文件进行 Lint 检查.

> 注意,提交报错,然后修改后记得再次暂存(`git add .`),因为 lint-staged 只是对暂存文件检查,不暂存就会继续报之前的错.

### commitlint

对 git 提交时的信息进行检查.

```
pnpm add @commitlint/cli @commitlint/config-conventional -D
```

然后在根目录创建配置文件 `.commitlintrc.cjs`

```
module.exports = {
  extends: ["@commitlint/config-conventional"]
}
```

然后把 commitlint 命令也添加 Husky Hook。运行命令：

```
npx husky add .husky/commit-msg "npx --no-install commitlint -e $HUSKY_GIT_PARAMS"
```

#### 类型参考

| 类型     | 描述                                                   |
| -------- | ------------------------------------------------------ |
| ci       | 持续集成修改                                           |
| docs     | 文档修改                                               |
| feat     | 新特性、新功能                                         |
| fix      | 修改 bug                                               |
| perf     | 优化相关，比如提升性能、体验                           |
| refactor | 代码重构                                               |
| revert   | 回滚到上一个版本                                       |
| style    | 代码格式修改, 注意不是 css 修改                        |
| test     | 测试用例修改                                           |
| build    | 编译相关的修改，例如发布版本、对项目构建或者依赖的改动 |
| chore    | 其他修改, 比如改变构建流程、或者增加依赖库、工具等     |
| update   | 普通更新                                               |

#### 使用方式

```git
git commit -m 'feat: 增加 xxx 功能'
git commit -m 'fix(account): 修复xxx的bug'
```

## Vite 插件配置

| 插件名称                 | 描述                 |
| ------------------------ | -------------------- |
| vite-plugin-eslint       | 支持 eslint          |
| vite-plugin-html         | HTML 压缩,EJS 模版   |
| vite-plugin-compression  | 使用 gzip 来压缩资源 |
| vite-plugin-svg-icons    | 用于生成 svg 雪碧图. |
| rollup-plugin-visualizer | 视图分析文件打包大小 |

### 安装插件

```
pnpm add vite-plugin-eslint vite-plugin-html vite-plugin-compression vite-plugin-svg-icons rollup-plugin-visualizer -D
```

#### Vite 配置

```ts
// vite.config.ts
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { visualizer } from "rollup-plugin-visualizer";
import { ConfigEnv, defineConfig, loadEnv, UserConfig } from "vite";
import viteCompression from "vite-plugin-compression";
import eslintPlugin from "vite-plugin-eslint";
import { createHtmlPlugin } from "vite-plugin-html";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";
import { wrapperEnv } from "./src/utils/getEnv";

// @see: https://vitejs.dev/config/
export default defineConfig((mode: ConfigEnv): UserConfig => {
	const env = loadEnv(mode.mode, process.cwd());
	const viteEnv = wrapperEnv(env);

	return {
		// base: "/",
		// alias config
		resolve: {
			alias: {
				"@": resolve(__dirname, "./src")
			}
		},
		// global css
		css: {
			preprocessorOptions: {
				less: {
					// modifyVars: {
					// 	"primary-color": "#1DA57A",
					// },
					javascriptEnabled: true,
					additionalData: `@import "@/styles/var.less";`
				}
			}
		},
		// server config
		server: {
			host: "0.0.0.0", // 服务器主机名，如果允许外部访问，可设置为"0.0.0.0"
			port: viteEnv.VITE_PORT,
			open: viteEnv.VITE_OPEN,
			cors: true,
			// https: false,
			// 代理跨域（mock 不需要配置，这里只是个事列）
			proxy: {
				"/api": {
					target: "https://mock.mengxuegu.com/mock/62abda3212c1416424630a45", // easymock
					changeOrigin: true,
					rewrite: path => path.replace(/^\/api/, "")
				}
			}
		},
		// plugins
		plugins: [
			react(),
			createHtmlPlugin({
				inject: {
					data: {
						title: viteEnv.VITE_GLOB_APP_TITLE
					}
				}
			}),
			// * 使用 svg 图标
			createSvgIconsPlugin({
				iconDirs: [resolve(process.cwd(), "src/assets/icons")],
				symbolId: "icon-[dir]-[name]"
			}),
			// * EsLint 报错信息显示在浏览器界面上
			eslintPlugin(),
			// * 是否生成包预览
			viteEnv.VITE_REPORT && visualizer(),
			// * gzip compress
			viteEnv.VITE_BUILD_GZIP &&
				viteCompression({
					verbose: true,
					disable: false,
					threshold: 10240,
					algorithm: "gzip",
					ext: ".gz"
				})
		],
		esbuild: {
			pure: viteEnv.VITE_DROP_CONSOLE ? ["console.log", "debugger"] : []
		},
		// build configure
		build: {
			outDir: "dist",
			// esbuild 打包更快，但是不能去除 console.log，去除 console 使用 terser 模式
			minify: "esbuild",
			// minify: "terser",
			// terserOptions: {
			// 	compress: {
			// 		drop_console: viteEnv.VITE_DROP_CONSOLE,
			// 		drop_debugger: true
			// 	}
			// },
			rollupOptions: {
				output: {
					// Static resource classification and packaging
					chunkFileNames: "assets/js/[name]-[hash].js",
					entryFileNames: "assets/js/[name]-[hash].js",
					assetFileNames: "assets/[ext]/[name]-[hash].[ext]"
				}
			}
		}
	};
});
```

#### Vite-plugin-html

在`index.html`文件中将 title 替换为`<%- title %>`.

## 修改 tsconfig.json

删除`tsconfig.node.json`

```json
{
	"compilerOptions": {
		"target": "ESNext",
		"useDefineForClassFields": true,
		"lib": ["DOM", "DOM.Iterable", "ESNext"],
		"allowJs": false,
		"skipLibCheck": true,
		"esModuleInterop": false,
		"allowSyntheticDefaultImports": true,

		/* Strict Type-Checking Options */
		"strict": true /* Enable all strict type-checking options. */,
		// "noImplicitAny": true,                 /* Raise error on expressions and declarations with an implied 'any' type. */
		// "strictNullChecks": true,              /* Enable strict null checks. */
		// "strictFunctionTypes": true,           /* Enable strict checking of function types. */
		// "strictBindCallApply": true,           /* Enable strict 'bind', 'call', and 'apply' methods on functions. */
		// "strictPropertyInitialization": true,  /* Enable strict checking of property initialization in classes. */
		// "noImplicitThis": true,                /* Raise error on 'this' expressions with an implied 'any' type. */
		// "alwaysStrict": true,                  /* Parse in strict mode and emit "use strict" for each source file. */

		"forceConsistentCasingInFileNames": true,
		"module": "ESNext",
		"moduleResolution": "Node",
		"resolveJsonModule": true,
		"isolatedModules": true,
		"noEmit": true,
		"jsx": "react-jsx",
		// 解析非相对模块名的基准目录
		"baseUrl": "./",
		// 模块名到基于 baseUrl的路径映射的列表。
		"paths": {
			"@": ["src"],
			"@/*": ["src/*"]
		}
	},
	"include": ["src/**/*.ts", "src/**/*.d.ts", "src/**/*.tsx", "vite.config.ts"],
	"exclude": ["node_modules", "dist", "**/*.js"]
}
```

## 工具 utils

新建工具文件夹 utils.

### 安装工具插件

```
pnpm add dotenv -D
```

创建文件 `getEnv.ts`.
