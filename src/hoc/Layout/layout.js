import React, {Component} from 'react'
import classes from "./layout.module.css"
import MenuToggle from "../../components/Navigation/MenuToggle"
import Drawer from "../../components/Navigation/Drawer/Drawer"
import { connect } from 'react-redux'
class Layout extends Component{

    state = {
        menu:false
    }

    toggleMenuHandler= () =>{
        this.setState({
            menu: !this.state.menu
        })
    }

    menuCloseHandler = () =>{
        this.setState({
            menu:false
        })
    }
    render(){
        return(
            <div className={classes.Layout}>
                
                <Drawer
                isOpen={this.state.menu}
                onClose={this.menuCloseHandler}
                isAuthentification={this.props.isAuthentification}
                />
                
                <MenuToggle
                    onToggle={this.toggleMenuHandler}
                    isOpen={this.state.menu}
                />

                <main>
                    {this.props.children}
                </main>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return{
      isAuthentification: !!state.auth.token
    }
  }

export default connect(mapStateToProps)( Layout);