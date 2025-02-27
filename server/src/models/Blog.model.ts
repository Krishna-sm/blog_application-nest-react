import { Schema,Prop, SchemaFactory} from "@nestjs/mongoose";
import { User } from "./User.model";
import * as mongoose from 'mongoose';
import slugify from 'slugify'
import { v4 as uuidv4 } from 'uuid';
export type BlogDocument = mongoose.HydratedDocument<Blog>;

@Schema({
    timestamps:true,
    versionKey:false
})
export class Blog{
    @Prop({
        required:true,
        type: mongoose.Schema.Types.ObjectId,
         ref: 'User'

    })
    user:User
    @Prop({
        required:true,
        trim:true,
        type: String,
    })
    title:string
    @Prop({
        default:'',
        trim:true,
        type: String,
    })
    slug:string
    @Prop({
        required:true,
        trim:true,
        type: String,
    })
    content:string 
    @Prop({
        required:true,
        trim:true,
        type: String,
    })
    image:string

    @Prop({
        required:true,
        trim:true,
        type: [String],
    })
    tags:string[]
    @Prop({
        default:true,
        type: Boolean,
    })
    isPublic:boolean

}





export const BlogSchema = SchemaFactory.createForClass(Blog);

BlogSchema.pre("save",async function(next){
    const blog= this;
    if(blog.isModified("title")){
       this.slug= slugify(blog.title+" "+ uuidv4(), {
            replacement: '-',  // replace spaces with replacement character, defaults to `-`
            remove: undefined, // remove characters that match regex, defaults to `undefined`
            lower: false,      // convert to lower case, defaults to `false`
            strict: false,     // strip special characters except replacement, defaults to `false`
            locale: 'vi',      // language code of the locale to use
            trim: true         // trim leading and trailing replacement chars, defaults to `true`
          })
    }
    next()
})