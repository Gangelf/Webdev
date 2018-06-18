const appRoot = document.getElementById('app');

let toggled = false;

const toggle = () => {
    toggled = !toggled

    render();
};

const render = () => {
    const visible = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={toggle}>{toggled ? 'Hide Details' : 'Show Details'}</button>
            {toggled && (
                <div>
                    <p>Hey. These are some details you can now see</p>
                </div>
            )}
        </div>
    );
    ReactDOM.render(visible, appRoot);
};

render();

