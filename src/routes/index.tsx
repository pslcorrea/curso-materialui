import { Button } from "@mui/material";
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Button variant="contained" color="primary">
            Home
          </Button>
        }
      />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
