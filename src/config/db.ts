import { DataSource } from "typeorm";
import { Ad } from "../entities/Ad";
import { Tag } from "../entities/Tag";
import { Category } from "../entities/Category";


const dataSource = new DataSource({
type: "sqlite",
database:"good_corner.sqlite",
entities: [Ad, Tag, Category],
synchronize: true,
logging:["error", "query"]
});


export default dataSource;