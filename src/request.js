const postOrders = async (data) => {

    const response = await fetch("https://pizzaportal.azurewebsites.net/api/SendOrder",
        {
            method: "POST",
            body: JSON.stringify(data)
        }
    )

    console.log(response)
}

export default postOrders