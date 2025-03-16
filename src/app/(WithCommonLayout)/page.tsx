import { Button } from "@/components/ui/button";
import { getCurrentUser } from "@/services/auth";


const HomePage = async() => {
  console.log(await getCurrentUser())
  return (
    <div className="text center flex items-center justify-center">
      <Button className="">Hello button</Button>
    </div>
  )
}

export default HomePage
