import LoginDialog from "@/components/ui-models/sx/LoginDialog";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function page() {
  return (
    <div className='w-full h-[100vh] bg-background flex items-center justify-center'>
      <Card className='drop-shadow-xl'>
        <CardHeader>
          <CardTitle>Session Expired</CardTitle>
          <CardDescription>Please login again</CardDescription>
        </CardHeader>
        <CardContent>
          <LoginDialog sx={"w-full"} />
        </CardContent>
      </Card>
    </div>
  );
}
