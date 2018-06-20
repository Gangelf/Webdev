class Visible extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            toggled: false
        }
    }
    toggle() {
        this.setState((prevState) => {
            return {
                toggled: !prevState.toggled
            };
        });
    }
    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.toggle}>{this.state.toggled ? 'Hide Details' : 'Show Details'}</button>
                {this.state.toggled && (
                    <div>
                        <p>Hey. These are some details you can now see</p>
                    </div>
                )}
            </div>
        );
    }
}

ReactDOM.render(<Visible />, document.getElementById('app'));

// const appRoot = document.getElementById('app');

// let toggled = false;

// const toggle = () => {
//     toggled = !toggled

//     render();
// };

// const render = () => {
//     const visible = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={toggle}>{toggled ? 'Hide Details' : 'Show Details'}</button>
//             {toggled && (
//                 <div>
//                     <p>Hey. These are some details you can now see</p>
//                 </div>
//             )}
//         </div>
//     );
//     ReactDOM.render(visible, appRoot);
// };

// render();

