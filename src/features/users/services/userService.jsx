import React, { useEffect, useState } from "react";
import { UserCard } from "../components/UserCard";
import axios from "axios";

const API_URL = 'https://randomuser.me/api/?results=30';


export const getUsers = async () => {
    const response = await axios.get(API_URL);
    console.log(response.data.results);
    return response.data.results;
}

