const divStyle = {
    backgroundColor: 'lightgrey',
    margin: '0px',
    padding: '5px',
    textAlign: 'center'
}

var scope = {
    title : "My React App",
    footerText : "Footer text",
    color: "blue",
    message: "",
    selectedIndex: -1,
    author : {
        name: "John Doe",
        phone: "800-555-1212",
        email: "jdoe@gmail.com"
    },
    books: [
        {isbn:'123', title:'The Time Machine', price:5.95},
        {isbn:'123', title:'War of the Worlds', price:6.95},
        {isbn:'123', title:'The Invisible Man', price:4.95},
    ]
}

function App(props) {
    return (
        <div className={'boxed'}>
            <Header title={props.title}/>
            <Body {...props} />
            {/* <FragTest /> */}
            <Footer text={props.footerText} />
        </div>
    )
}

function Body(props) {
    return (
        <div>
            <p>Author: {props.author.name}</p>
            <BookList books={props.books} selected={props.selectedIndex} />
            <p>Enter your favorite color:</p>
            <input type='text' name='color' value={props.color}
                onChange={ handleChange } /> 
            <input type='button' value='Click Here' onClick={ handleButtonClick } /> 
            <p>{props.message}</p>
        </div>
    )
}

function BookList(props) {
    return (
        <ul>
            {
                props.books.map((book, index) => {
                    return (
                        <li key={index} onClick={(e) => handleListItemClick(e, index)}
                            className={ index === props.selected ? 'selected' : '' }>{book.title}</li>
                    )
                })
            }
        </ul>
    )
}

function Footer(props) {
    return (
        <div>
            <h4 style={ divStyle }>
                {props.text}
            </h4>
        </div>
    )
}

function Header(props) {
    return (
        <div>
            <h3 style={ divStyle }>
                {props.title}
            </h3>
        </div>
    )
}

function FragTest(props) {
    return (
        <ul>
            <ColorList />
        </ul>
    )
}

function ColorList(props) {
    return (
        <React.Fragment>
            <li>Red</li>
            <li>Yellow</li>
            <li>Blue</li>
        </React.Fragment>
    )
}

function handleButtonClick(event) {
    scope.message = `You like the color ${scope.color}!`;
    renderApp(scope);
}

function handleChange(event) {
    scope[event.currentTarget.name] = event.currentTarget.value;
    renderApp(scope);
}

function handleListItemClick(event, index) {
    scope.selectedIndex = index;
    const book = scope.books[index];
    renderApp(scope);
    console.log(`You chose: ${book.isbn}, ${book.title}, ${book.price}`);
}

function renderApp(scope) {
    ReactDOM.render(
        <App {...scope} />,
        document.getElementById('react-container')
    );
}

renderApp(scope);


