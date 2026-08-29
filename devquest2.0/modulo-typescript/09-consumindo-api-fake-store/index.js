"use strict";
const baseURL = "https://fakestoreapi.com/products";
const loadFakeStore = async () => {
    try {
        const response = await fetch(baseURL);
        console.log(response);
        console.log(typeof response);
    }
    catch (error) {
        console.log("Erro ao carregar FAKE: ", error);
    }
};
