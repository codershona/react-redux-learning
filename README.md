# React Redux Learning



```
   * Changing the state Object: To change a value in the state object, use the this.setState() method ;

   * Refer a state by using : this.state.propertyname;

   * Lifecycle of components:
   * Mounting means putting elements into the DOM.

			React has four built-in methods that gets called, in this order, when mounting a component:

			constructor()
			getDerivedStateFromProps()
			render()
			componentDidMount()
    

    * The componentDidMount() method is called after the component is rendered.

    * This is where you run statements that requires that the component is already placed in the DOM.

    * Updating: The next phase in the lifecycle is when a component is updated.

		A component is updated whenever there is a change in the component's state or props.

		React has five built-in methods that gets called, in this order, when a component is updated:

		getDerivedStateFromProps()
		shouldComponentUpdate()
		render()
		getSnapshotBeforeUpdate()
		componentDidUpdate()
		The render() method is required and will always be called, the others are optional and will be called if you define them.

    

    * Sass installation: npm install node-sass;
    * 

```




```
  * Redux Installation:
  * npm install --save redux;
  * npm install --save react-redux;
  * npm install --save-dev redux-devtools;
  * 

```