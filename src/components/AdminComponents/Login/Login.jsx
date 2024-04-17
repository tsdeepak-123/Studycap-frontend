import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Box, Typography, IconButton } from "@mui/material";
import { VisibilityOff, Visibility } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { AdminAction } from "../../../Stores/AdminAuth";
import toast from "react-hot-toast";
import Footer from "../../AdminComponents/Footer/Footer";
import { axiosAdmin } from "../../../Api/axiosInstance";
import fieldValidate from "../../../Validation/Validate";
import { useCookies } from "react-cookie";
import { Toaster } from "react-hot-toast";
import "./Login.css";

function Login() {
  const [cookies, setCookies] = useCookies(["AdminsecretKey"]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validate email
    const emailError = fieldValidate("email", email);
    if (emailError) {
      toast.error(emailError);
      return;
    }

    // Validate password
    const passwordError = fieldValidate("password", password);
    if (passwordError) {
      toast.error(passwordError);
      return;
    }

    try {
      const response = await axiosAdmin.post("login", { email, password });
      if (response.data.success) {
        const ageInMinutes = 60;
        const expirationDate = new Date(
          new Date().getTime() + ageInMinutes * 60 * 1000
        );
        setCookies("AdminsecretKey", response.data.adminSignin.token, {
          path: "/",
          expires: expirationDate,
        });
        dispatch(
          AdminAction.AddAdmin({ token: response.data.adminSignin.token })
        );
        toast.success(response.data.message);
        navigate("/admin/dashboard");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "An error occurred");
    }
  };

  return (
    <div className="screen flex flex-col">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="mb-4">
        <img
          src="/Images/studyCapLogo.png"
          alt="Admin Logo"
          style={{ width: "150px", marginRight: "10px" }}
        />
      </div>
      <Box className="bg-white">
        <form onSubmit={handleSubmit} noValidate>
          <TextField
            fullWidth
            id="email"
            label="Email"
            type="email"
            value={email}
            onChange={handleEmailChange}
            margin="normal"
            required
          />
          <TextField
            fullWidth
            id="password"
            label="Password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={handlePasswordChange}
            margin="normal"
            required
            InputProps={{
              endAdornment: (
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={togglePasswordVisibility}
                  edge="end"
                >
                  {showPassword ? (
                    <VisibilityOff className="icon-wrapper" />
                  ) : (
                    <Visibility className="icon-wrapper" />
                  )}
                </IconButton>
              ),
            }}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              mt: 3,
              mb: 2,
              backgroundColor: "#4793AF",
              "&:hover": {
                backgroundColor: "#336B85", 
              },
            }}
          >
            Login
          </Button>
        </form>
      </Box>
      <Footer />
    </div>
  );
}

export default Login;
