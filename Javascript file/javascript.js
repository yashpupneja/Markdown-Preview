const initialMarkdown =  `
### Headers                              

# Heading 1                                                                            
## Heading 2                                                                        
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6

### List
- List item 1
- List item 2
- List item 3

### Links
[FreeCodeCamp](https://learn.freecodecamp.org/)
[Google](https://www.google.com)

### Text Decorations

*Italics*

**bold**

### Images
![alt text](https://www.iwillteachyoualanguage.com/wp-content/uploads/2018/05/metalearing.jpg 'Learning Mind')

### Blockquote

> To be or not to be. That is a stupid question.

### Code

\`npm install create-react-app -g\`

\`\`\`
function addtwonumbers(a,b){
return a+b;
}
const name="Yashaswi"
const age=20
const number=Math.random() * 10
\`\`\`
`

marked.setOptions({
  highlight:function(code){
    return hljs.highlightAuto(code).value
  },
  breaks:true
})

class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
      markdown: initialMarkdown
    }
  }
  handleChange = e =>this.setState({markdown: e.target.value})
  
  render(){
    return(
      <div>
        <h1>MarkDown Previewer</h1>
        <div className="container">
          <div className="left">
              <textarea id="editor" value={this.state.markdown} onChange={this.handleChange}/>
          </div>
          <div className="right">
            <div id="preview" dangerouslySetInnerHTML={{__html: marked(this.state.markdown)}} /></div>
          </div>
        </div>
    )
  }
}
ReactDOM.render(<App/>,document.getElementById('root'))
