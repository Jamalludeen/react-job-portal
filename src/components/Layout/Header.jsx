import React, { useState } from "react";
import {
  Box,
  Burger,
  Button,
  Divider,
  Drawer,
  Group,
  ScrollArea,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import classes from "./Header.module.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { IconArchive } from "@tabler/icons-react";
import Modal from "./Modal.jsx";
import SavedJobItem from "./SavedJobItem.jsx";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../../store/authSlice.jsx";

const Header = () => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);
  const auth = useSelector(state => state.auth);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const navigate = useNavigate();

  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);

  const logoutHandler = () => {
    dispatch(authActions.logout());
    navigate("/login");
  };

  const openCart = () => {
    setModalIsOpen(true);
  };

  const closeCart = () => {
    setModalIsOpen(false);
  };

  return (
    <React.Fragment>
      {modalIsOpen && (
        <Modal onCloseCart={closeCart}>
          <SavedJobItem jobs={cart.items} />
        </Modal>
      )}
      <Box>
        <header className={classes.header}>
          <Group justify="space-between" h="100%">
            <Group h="100%" gap={0} visibleFrom="sm">
              <Link to="/" className={classes.link}>
                Home
              </Link>
              <Link to="/jobs" className={classes.link}>
                Jobs
              </Link>
              <a href="#" className={classes.link}>
                Companies
              </a>
              <a href="#" className={classes.link}>
                About Us
              </a>
            </Group>

            <Group visibleFrom="sm">
              {/* when the user is logged in we show the save icon */}
              {auth.isAuthenticated && (
                <Button onClick={openCart}>
                  <IconArchive size={24} stroke={1.5} />{" "}
                  <span> {cart.items.length} </span>
                </Button>
              )}

              {/* when the user is logged in we show the logout button */}

              {auth.isAuthenticated && (
                <Button
                  className="btn btn-outline-primary"
                  variant="default"
                  onClick={logoutHandler}
                >
                  Logout
                </Button>
              )}

              {!auth.isAuthenticated && (
                <Link
                  to="/login"
                  className="btn btn-outline-primary"
                  variant="default"
                >
                  Log in
                </Link>
              )}

              {!auth.isAuthenticated && <Button>Sign up</Button>}
            </Group>

            <Burger
              opened={drawerOpened}
              onClick={toggleDrawer}
              hiddenFrom="sm"
            />
            {/* when the user is logged in we show the save icon */}
            {auth.isAuthenticated && (
              <Button onClick={openCart} hiddenFrom="sm">
                <IconArchive size={24} /> <span> {cart.items.length} </span>
              </Button>
            )}
          </Group>
        </header>

        <Drawer
          opened={drawerOpened}
          onClose={closeDrawer}
          size="100%"
          padding="md"
          title="Navigation"
          hiddenFrom="sm"
          zIndex={1000000}
        >
          <ScrollArea h="calc(100vh - 80px" mx="-md">
            <Divider my="sm" />

            <Link to="/" className={classes.link}>
              Home
            </Link>

            <Link to="/jobs" className={classes.link}>
              Jobs
            </Link>

            <a href="#" className={classes.link}>
              Companies
            </a>

            <a href="#" className={classes.link}>
              About Us
            </a>

            <Group justify="center" grow pb="xl" px="md">
              {auth.isAuthenticated && (
                <Button
                  className="btn btn-outline-primary"
                  variant="default"
                  onClick={logoutHandler}
                >
                  Logout
                </Button>
              )}
              {!auth.isAuthenticated && (
                <Link
                  to="/login"
                  className="btn btn-outline-primary"
                  variant="default"
                >
                  Log in
                </Link>
              )}

              {!auth.isAuthenticated && <Button>Sign up</Button>}
            </Group>
          </ScrollArea>
        </Drawer>
      </Box>
    </React.Fragment>
  );
};

export default Header;
