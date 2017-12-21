import * as React from "react";
import * as ReactNavigation from "react-navigation";
import { connect } from "react-redux";
import * as DrawerNavigation from "./AppNavigation";

function ReduxNavigation(props: any) {
  const { dispatch, nav } = props
  const navigation = ReactNavigation.addNavigationHelpers({
    dispatch,
    state: nav
  })

return <DrawerNavigation navigation={navigation}> 
}