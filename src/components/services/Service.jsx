import axios from "axios"
export let services={
    registerUser:async(payload)=>{
            await axios.post("http://localhost:3000/user",payload)
        },
    loginUser:async(payload)=>{
            let {data}=await axios.get("http://localhost:3000/user")
            let isAvailable=data.find((val)=>val.email==payload.email&&val.password==payload.password)

            isAvailable?console.log("LOGIN SUCCESSFUL 😊👍"):console.log("INVALID EMAIL OR PASSWORD TRY AGAIN 👍👍👍!!!!")
            return isAvailable
    },
    createTask:async(payload)=>{
        await axios.post("http://localhost:3000/task",payload)
    },
    gettask:async(globalstate)=>{
        let {data}=await axios.get(`http://localhost:3000/task?userid:${globalstate.userid}`)
        return data
    },
    updatetask:async(id,payload)=>{
        let {data} = await axios.put(`http://localhost:3000/task/${id}`,payload)
        console.log(data);
    },
    deletetask:async(id)=>{
        let {data} = await axios.delete(`http://localhost:3000/task/${id}`)
        return data
    }


}
