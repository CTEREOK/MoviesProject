// Создали приложение
const App1 = () => {
    return React.createElement("h1", { id: 'hello', className: 'class1' }, 'Hello from React!')
 }
// Используем функцию
ReactDom.render(React.createElement(App), document.getElementById('root'));

// props - некоторые свойства
const Book1 = (props) => {
// может посмотреть что находиться в props
     console.log(props)
    return React.createElement('div', {}, [
        React.createElement('h2', {}, props.name),
        React.createElement('p', {}, props.year),
        React.createElement('p', {}, props.price),
        ])
    }
// Создали функцию
const App2 = () => {
        return React.creaeteElement('div', {}, [
        React.creaeteElement('h1', {id: 'hello', className: 'class1'}, 'Hellow from React!'),
        React.creaeteElement(Book, { name: 'JS for begginners', year: 2022, price: 900 }),
        React.creaeteElement(Book, { name: 'React', year: 2023, price: 1000 }),
        React.creaeteElement(Book, { name: 'HTML and css', year: 2021, price: 800 }),
        ])
    }
    
ReactDom.render(React.createElement(App1), document.getElementById('root'));
ReactDom.render(React.createElement(Book1), document.getElementById('root'));
ReactDom.render(React.createElement(App2), document.getElementById('root'));