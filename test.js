let todos = [
    {
        id: "b1a1ef0f-ba6e-4c24-bab7-049d1c4c0711",
        task: "Unit 3",
        completed: ""
    },
    {
        id: "96041c2b-3d95-4e8f-b638-7ba883829f41",
        task: "Unit 2",
        completed: ""
    },
    {
        id: "0bb7e258-6dc3-4b73-8f57-28a60934392e",
        task: "Unit 1",
        completed: true
    }
];
let value = todos.map((todo) => {
    console.log(todo.id);
});
