"use client"

import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Select, MenuItem } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { Dayjs } from "dayjs";

export default function DateReserve() {

    const [reserveDate, setReserveDate] = useState<Dayjs | null>(null);
    const [name, setName] = useState("");
    const [contactNumber, setContactNumber] = useState("");
    const [selectedVenue, setSelectedVenue] = useState("Bloom");

    return (
        <div className="bg-slate-100 rounded-lg gap-x-5 gap-y-2 w-fit px-10 py-5 flex flex-row justify-center">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker className="bg-white" 
                value={reserveDate}
                onChange={(newDate) => setReserveDate(newDate)}
            />
            </LocalizationProvider>

            <TextField
                variant="standard"
                name="Name-Lastname"
                label="Name-Lastname"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <TextField
                variant="standard"
                name="Contact-Number"
                label="Contact-Number"
                value={contactNumber}
                onChange={(e) => setContactNumber(e.target.value)}
            />


            <Select
                variant="standard"
                name="venue"
                id="venue"
                defaultValue=""
                value={selectedVenue}
                onChange={(e) => setSelectedVenue(e.target.value)}
                className="h-[2em] w-[200px]"
            >
                <MenuItem value="Bloom">The Bloom Pavilion</MenuItem>
                <MenuItem value="Spark">Spark Space</MenuItem>
                <MenuItem value="GrandTable">The Grand Table</MenuItem>
            </Select>
        </div>


    );
}