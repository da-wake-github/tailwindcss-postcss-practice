# Tailwind CSSとPostCSS

## サンプルページ

- [サンプルページを表示](https://da-wake-github.github.io/tailwindcss-postcss-practice/)

## 参考サイト
- [Tailwind CSS - Rapidly build modern websites without ever leaving your HTML.](https://tailwindcss.com/)
- [PostCSS - a tool for transforming CSS with JavaScript](https://postcss.org/)
- [Tailwind CSS の一歩進んだ書き方](https://zenn.dev/ixkaito/articles/advanced-tailwindcss)
- [Tailwind CSSで引数のあるMixinのような仕組みを作る方法](https://yuheiy.com/2022-03-21-mixins-that-take-arguments-in-tailwind-css)
- [TailwindCSS @layerと@applyを使ってユーティリティクラスをまとめる方法 - MAI LIFE](https://mai.kosodante.com/tailwindcss-apply-layer/)
- [JS API for using `@apply` in Plugins · tailwindlabs/tailwindcss · Discussion #2049](https://github.com/tailwindlabs/tailwindcss/discussions/2049)
- [Tailwind CSS Grid | Preline UI, crafted with Tailwind CSS](https://preline.co/docs/grid.html)
- [グリッドレイアウトの基本概念 - CSS: カスケーディングスタイルシート | MDN](https://developer.mozilla.org/ja/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout)
- [Grid Template Columns - Tailwind CSS](https://v2.tailwindcss.com/docs/grid-template-columns)
- [Tailwind grid_template_columns - Stack Overflow](https://stackoverflow.com/questions/66556514/tailwind-grid-template-columns)
- [css - Grid Template Column issue on Tailwind - Stack Overflow](https://stackoverflow.com/questions/74815827/grid-template-column-issue-on-tailwind)
- [Grid Column Start / End - Tailwind CSS](https://tailwindcss.com/docs/grid-column#arbitrary-values)

## 使う必要のなかったnpm scripts
```json
"tail": "tailwindcss -i ./src/input.css -o ./dist/output.css",
"tail:dev": "tailwindcss -i ./src/input.css -o ./dist/output.css --watch",

"dev": "set NODE_ENV=development&&run-p *:dev",
"prod": "run-p tail post"
```