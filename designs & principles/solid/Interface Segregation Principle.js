/**
 * The Interface Segregation Principle (ISP) states that clients should not be forced
 *  to depend on methods they do not use.
 */



///////// Bad Pattern

const Product = ({ product }) => {
    return (
        <div>
            <h2>{product.title}</h2>
            <p>Price: {product.price}</p>
            <p>Version: {product.version}</p>
            <h3>Descriptions:</h3>
            {product.descriptions.map(desc => (
                <p key={desc.id}>{desc.text}</p>
            ))}
            <h3>setting:</h3>
            {product.setting.map(setting => (
                <p key={setting.id}>{setting.text}</p>
            ))}
            {/* Refrigerator-specific properties */}
            {product.type === "Refrigerator" && (
                <p>Energy Rating: {product.energyRating}</p>
            )}
        </div>
    );
};

const ProductPage = () => {
    const products = [
        {
            id: "11",
            type: "Laptop",
            title: "Laptop Mac",
            price: "200",
            descriptions: [{ id: "111", text: "This is the best one" }],
            setting: [{ id: "121", text: "16GB RAM" }],
            version: "v3",
        },
        {
            id: "12",
            type: "Refrigerator",
            title: "Smart Fridge",
            price: "800",
            descriptions: [{ id: "112", text: "Keeps your food fresh" }],
            setting: [{ id: "122", text: "Water Dispenser" }],
            version: "v1",
            energyRating: "A++",
        },
    ];

    return (
        <div>
            This is the product page
            {products.map(product => (
                <Product key={product.id} product={product} />
            ))}
        </div>
    );
};



////// Example 2 
/// Bad, because props drilling

function Dashboard({ user }) {
    return (
        <section>
            <Header />
            ...
        </section>
    )
}

function Header({ user }) {
    return (
        <header>
            <Navigation user={user} />
        </header>
    )
}

function Navigation({ user }) {
    return (
        <nav>
            <UserGreeting name={user.name} />
            ...
        </nav>
    )
}

function UserGreeting({ name }) {
    return <h1>Hey, {name}!</h1>;
}

//// Good Pattern

const TechProduct = ({ title, price, version, descriptions, setting }) => {
    return (
        <div>
            <h2>{title}</h2>
            <p>Price: {price}</p>
            <p>Version: {version}</p>
            <h3>Descriptions:</h3>
            {descriptions.map(desc => (
                <p key={desc.id}>{desc.text}</p>
            ))}
            <h3>setting:</h3>
            {setting.map(setting => (
                <p key={setting.id}>{setting.text}</p>
            ))}
        </div>
    );
};

const RefrigeratorProduct = ({ title, price, energyRating, descriptions, setting }) => {
    return (
        <div>
            <h2>{title}</h2>
            <p>Price: {price}</p>
            <p>Energy Rating: {energyRating}</p>
            <h3>Descriptions:</h3>
            {descriptions.map(desc => (
                <p key={desc.id}>{desc.text}</p>
            ))}
            <h3>setting:</h3>
            {setting.map(setting => (
                <p key={setting.id}>{setting.text}</p>
            ))}
        </div>
    );
};



const ProductPage = () => {
    const products = [
        {
            id: "11",
            type: "Laptop",
            title: "Laptop Mac",
            price: "200",
            descriptions: [{ id: "111", text: "This is the best one" }],
            setting: [{ id: "121", text: "16GB RAM" }],
            version: "v3",
        },
        {
            id: "12",
            type: "Refrigerator",
            title: "Smart Fridge",
            price: "800",
            descriptions: [{ id: "112", text: "Keeps your food fresh" }],
            setting: [{ id: "122", text: "Water Dispenser" }],
            energyRating: "A++",
        },
    ];

    return (
        <div>
            This is the product page
            {products.map(product => {
                if (product.type === "Refrigerator") {
                    const { title, price, energyRating, descriptions, setting } = product;
                    return (
                        <RefrigeratorProduct 
                            key={product.id} 
                            title={title} 
                            price={price} 
                            energyRating={energyRating} 
                            descriptions={descriptions} 
                            setting={setting} 
                        />
                    );
                } else {
                    const { title, price, version, descriptions, setting } = product;
                    return (
                        <TechProduct 
                            key={product.id} 
                            title={title} 
                            price={price} 
                            version={version} 
                            descriptions={descriptions} 
                            setting={setting} 
                        />
                    );
                }
            })}
        </div>
    );
};


//// Good Example 2 
function UserGreeting() {
    const user = useUser();
    return <h1>Hey, {user.name}!</h1>;
}