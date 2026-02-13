import { Button, Paper, TextField } from "@mui/material"
import {  useEffect,  useState, type ChangeEvent, type Dispatch, type SetStateAction } from "react";
import type { Student } from "../utils/data";
import { createStudent } from "../api/student";

interface Props {
    students: Student[]
    setStudents: Dispatch<SetStateAction<Student[]>>
}

const initalState = {
    id: 0,
    fullName: "",
    age: "",
    email: "",
    class: ""
}
export const AddStudent = ({ setStudents, students }: Props) => {

    const [formData , setFormData] = useState(initalState)

    const handleChange =(e: ChangeEvent<HTMLInputElement>)=>{
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    };


        

    const handleSubmit =async () => {

        try {
               const data = await  createStudent(formData);
        setStudents([...students, data]);
        setFormData(initalState)
        }
        catch (err) {
            alert(err);
        }
     ;
    };
    
      


        useEffect(() => { 
            console.log("firing Use")
            if (formData.fullName === "Admin") {
                alert("خخ ادمن اي عايز تهكر الداتا بز؟؟");
            }
        }, [formData])

    

    return (
        <Paper sx={{ width: 200, padding: 1, marginTop: 1, gap: 1, display: 'flex', flexDirection: 'column' }}>
            <TextField  onChange={handleChange} value={formData.fullName} id="outlined-basic" label="FullName" name="fullName" variant="outlined" />
            <TextField  onChange={handleChange} value={formData.age} id="outlined-basic" label="Age" name="age" variant="outlined" />
            <TextField  onChange={handleChange} value={formData.email} id="outlined-basic" label="Email " name="email" variant="outlined" />
            <TextField  onChange={handleChange} value={formData.class} id="outlined-basic" label="Class" name="class" variant="outlined" />
            <Button onClick={handleSubmit} variant="contained"> Sumbit </Button>

        </Paper>
    );

};

