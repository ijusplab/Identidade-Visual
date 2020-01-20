<div style="display: flex; align-items: center; justify-content: space-around;">
    <img src="/src/logos/ijusplab/logo_ijusplab_colorido_fundo_branco.jpg" height="100px" alt="" />
    <img src="/src/logos/incubadora/logo_incubadora_fundo_transparente.png" height="50px" alt="" />
</div>

<h1 style="font-family: Roboto, sans-serif; text-align: center; color: #0D47A1; text-decoration: underline; padding: 20px 0;">
    Biblioteca CSS do iJuspLab
</h1>

Folha de estilos CSS para rápida prototipação utilizada pelo Laboratório de Inovação da Justiça Federal de São Paulo - iJuspLab.

#### 1. Incluindo a folha de estilos em seu projeto

Abra o terminal na pasta raiz do projeto e digite:

```node
yarn add @ijusplab/ijusplabcss

// ou

npm -i @ijusplab/ijusplabcss
```

Uma vez feito isso, basta importar a folha de estilos no seu arquivo `.scss`:

```scss
@import "ijusplabcss"

...
```

> Atenção: Para essa configuração funcionar corretamente, recomendamos o uso do webpack com o loader postcss.

**Bônus**: a folha de estilos do iJuspLab já incopora a folha [normalize.css](https://necolas.github.io/normalize.css/).

#### 2. Como usar 

A folha de estilos do iJuspLab contém classes para layout, tipografia e efeitos.

##### 2.1. Tipografia

| Classe | Efeito |
| ----------- | ---------- |
| `text-overflow-ellipsis` | `text-overflow: ellipsis` + `white-space: nowrap` + `overflow: hidden` |
| `text-no-wrap` | `white-space: nowrap` + `overflow: hidden` |
| `text-color-default` | <span style="color: #636b6f">cinza médio</span> |
| `text-color-light` | <span style="color: #BDBDBD;">cinza claro</span> |
| `text-align-[position]` | atribui a `text-align` o valor `center/left/right/justify` definido em `position`  |
| `text-align-middle` | `vertical-align: middle`  |
| `font-family-default` | <span style="font-family: 'Roboto', 'Segoe UI', Arial, Helvetica, sans-serif;">Roboto e fallbacks sans-serif</span> |
| `font-family-alt` | <span style="font-family: 'Raleway', 'Segoe UI', Arial, Helvetica, sans-serif;">Ralway e fallbacks sans-serif</span> |
| `font-family-jf` | <span style="font-family: Calibri, Arial, Helvetica, sans-serif;">fontes oficiais da identidade visual da Justiça Federal: Calibri, Arial, Helvetica, sans-serif</span> |
| `font-weight-[#]` | atribui a `font-weight` o valor de `# * 100`, onde `#` vai de `3` a `9` |
| `font-size-[#]` | atribui a `font-size` o valor de `(#/20)rem`, onde `#` vai de `5` a `20` |

##### 2.2. Layout

| Classe | Efeito |
| ----------- | ---------- |
| `flex` | `display: flex` |
| `flex-[direction]` | `flex-direction: [direction]` |
| `flex-grow` | `flex-grow: 1` |
| `flex-shrink` | `flex-grow: 0`|
| `align-[attr]` | `align-items: [attr]` |
| `justify-[attr]` | `justify-content: [attr]` |
| `fill-width` | `width: 100%` |
| `fill-height` | `height: 100%` |
| `ma-#`, `my-#`, `mx-#`, `mt-#`,`mb-#`, `ml-#`, `mr-#`| define a propriedade `margin` do elemento em `(#*2)px`, onde `#` vai de `0` a `50`|
| `pa-#`, `py-#`, `px-#`, `pt-#`,`pb-#`, `pl-#`, `pr-#`| define a propriedade `padding` do elemento em `(#*2)px`, onde `#` vai de `0` a `50`|

##### 2.3. Efeitos

| Classe | Efeito |
| ----------- | ---------- |
| `round-#` | define a propriedade `border-radius` em `#px`, onde `#` vai de `0` a `50` |
| `overlay-#` | cria overlay escuro com grau definido em `#`, que vai de `0` a `10` |
| `overlay-light-#` | cria overlay claro com grau definido em `#`, que vai de `0` a `10` |
| `display-container` (elemento pai) e `display-hover` (elemento filho) | oculta suavemente o elemento `child` ao passar do mouse |
| `hover-shrink` | encolhe suavemente o elemento ao passar do mouse |
| `hover-opacity` | diminui suavemente a opacidade do elemento ao passar do mouse |
| `highlight` | <span style="background-color: yellow;">destaca elemento</span> |
| `visible` | `visibility: visible` + `opacity: 1` |
| `hidden` | `visibility: hidden` + `opacity: 0` |
| `scroll-[x/y]` | `overflow-[x/y]: scroll` |
| `scroll-custom-bar` | altera o visual da barra de rolagem para um estilo customizado |

---
<div style="display: flex; align-items: center; justify-content: space-around;">
    MIT &copy; 2020 - Incubadora de Soluções Tecnológicas - iJuspLab
</div>