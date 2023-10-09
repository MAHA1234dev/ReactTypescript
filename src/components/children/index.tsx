import React from "react";

function Children(props: any) {
    let metadata = React.Children.map(props.children, (child, index) => {
        // console.log(index, child); // printing index and child on console.
        return { index, child }
    })
    let data = React.Children.forEach(props.children, (child, index) => {
        // console.log(index, child); // printing index and child on console.
        return { index, child }
    })

    console.log(metadata, data);
    console.log(React.Children.count(props.children))
    // console.log(React.Children.only(props.children)); // should throw an error since 3 elements were passed to the Cards.jsx component from App.js
    console.log(React.Children.toArray(props.children)); // array of elements present in React.Children will be printed

    // let card: any[]
    // React.Children.forEach(props.children, (child) => {
    //     // adding the child to the card array
    //     card.push(child);
    //     // adding the horizontal line to separate each child from other
    //     card.push(<hr />);
    // })
    // return (card);

    return (
        <div>
            <p>
                {/* {props.children} */}
                {React.Children.map(props.children, (child) => {
                    // we will put the child inside some div and all the css properties of the div can be used to transform a child
                    return <div className="transformed-class">{child}</div>
                })}
            </p>
        </div>
    )
}

export default Children