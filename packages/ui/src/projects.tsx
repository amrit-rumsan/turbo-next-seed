import { useRouter } from "next/navigation"

export default function Projects(){
    const router = useRouter();
    return (
        <>
        <h1>Projects</h1>
        <ul>
            <li onClick={() => router.push("/projects/el-kenya/123")}>El Kenya</li>
            <li onClick={() => router.push("/projects/aa/123")}>AA</li>
            <li onClick={() => router.push("/projects/c2c/123")}>C2C</li>  
        </ul>
        </>
    )
}