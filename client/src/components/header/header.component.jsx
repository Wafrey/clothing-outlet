import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CartIcon from "../cart-icon/cart-icon.component";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "./../../redux/user/user.selectors";
import CartDropdown from "./../cart-dropdown/cart-dropdown.component";

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
} from "./header.styles";

const Header = ({ currentUser, cart }) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo/>
    </LogoContainer>
    <OptionsContainer>
      <OptionLink className="option" to="/shop">
        SHOP
      </OptionLink>
      <OptionLink className="option" to="/contact">
        CONTACT
      </OptionLink>
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <OptionLink className="option" to="/signin">
          SIGN IN
        </OptionLink>
      )}
      <CartIcon />
    </OptionsContainer>
    {cart ? null : <CartDropdown />}
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  cart: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
