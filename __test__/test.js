const test_args = (args) => {
    const { limit , page } = args;
    console.log( limit, page );
}


test_args({limit: 10, page:1})
