import { Card, CardBody, CardHeader, CardFooter, Image ,Divider, Link} from "@heroui/react"; 

 type CardProps = {
  numero?:number;
   titulo?: string;
   description? :string;
   body?:string;
   footer?:string;
   src?:string
 };
 
 const card = ({numero, titulo, description , body, footer, src}: CardProps) => {
   return (
     <Card>
       <CardHeader className="flex gap-3">
         <Image
           alt="heroui logo"
           height={40}
           radius="sm"
           src={src}
         />
         <div className="flex flex-col">
           <p className="text-md">{numero}</p>
           <h2 className="text-md">{titulo}</h2>
           <p className="text-small text-default-500">{description}</p>
         </div>
       </CardHeader>
       <Divider />
       <CardBody>
         <p>{body}</p>
       </CardBody>

       <CardFooter>
         <Link
           isExternal
           showAnchorIcon
           href="#"
         >
           {footer}
         </Link>
       </CardFooter>
     </Card>
   );
 };
 
 export default card