import DateReserve from "@/components/DateReserve";
import Button from "@mui/material/Button";
import { authOptions } from "../api/auth/[...nextauth]/authOptions";
import { getServerSession } from "next-auth";
import getUserProfile from "@/libs/getUserProfile";


export default async function BookingPage() {
    const session = await getServerSession(authOptions);
    if (!session || !session.user?.token) {
        return null;
    }
    const userProfile = await getUserProfile(session.user.token);
    return (
        <main className="w-[100%] flex flex-col items-center space-y-4">
            <h1 className="text-4xl font-bold">Venue Booking</h1>
            <div className="flex flex-col space-y-2">
                <table className="table-auto border-saperate border-spacing-2 text-left [&_td]:px-3 [&_td]:py-2"><tbody>
                    <tr><td>Name</td><td>{userProfile.data.name}</td></tr>
                    <tr><td>Email</td><td>{userProfile.data.email}</td></tr>
                    <tr><td>Tel.</td><td>{userProfile.data.tel}</td></tr>
                    <tr><td>Member Since</td><td>{userProfile.data.createdAt}</td></tr>
                </tbody>

                </table>
            </div>

            <div className="w-fit space-y-2">
                <div className="text-md text-left text-gray-600">Date, Contact Information and Venue</div>
                <DateReserve />
            </div>

            <Button
                type="submit"
                name="Book Venue"
                variant="contained"
            >
                Book Venue
            </Button>


        </main>

    );
}