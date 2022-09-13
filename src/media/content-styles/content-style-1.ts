const style = `
.primeTitleElement {
  text-align: center;
  padding: 30px;
  font-size: 175%;
  font-weight: bolder;
  border-radius: 5px;
  color: #000;
  page-break-before: always;
}

.secTitleElement {
  padding: 10px 0;
  margin-top: 40px;
  font-size: 150%;
  font-weight: bold;
  border-top: solid 3px black;
  color: #222;
  page-break-before: auto;
}

* {
  margin: 0;
  padding: 0;
}

body {
  font-family: sans-serif;
  color: #444;
}

h1 {
  color: #222;
  padding: 5px 10px;
  margin: 20px 0 10px 0;
  border-bottom: solid 1px #444;
  page-break-before: auto;
  font-size: 125%;
}

h2, h3 {
  color: #333;
  margin: 15px 0 5px 0;
}

div, p {
  margin: 20px 0;
  text-align: justify;
}

ol, ul {
  margin: 0 45px;
}

li {
  margin: 10px 0;
}

code {
  display: block;
  padding: 25px;
  margin: 25px;
  border-radius: 10px;
  box-shadow: 0 0 10px 2px #00000011;
  color: #eee;
  background-color:#333;
}

note {
  display: block;
  padding: 25px;
  margin: 25px;
  border-radius: 0 20px 0 20px;
  background-color:#eaeaea;
}
`

export default style;