** Qestion-1<br>
** What are some differences between interfaces and types in TypeScript?

<p>
টাইপস্ক্রিপ্টে Interface এবং Type মূলত ২ টাই টাইপ Define এর জন্য ব্যবহার করা হয়ে থাকে | তবে এদের মধ্যে কিছু পার্থক্য রয়েছে নিম্নে উদাহরণ সহ দেখানো হলো:

<ul>
<li>1. interface Redeclare করে বাড়ানো যায়
মানে একই interface আবার লিখে নতুন property যোগ করা যায় | কিন্তু Type এর ক্ষেত্রে Redeclare করা যায় না |<br>
Example:<br>
interface User {<br>
  name: string;<br>
}<br>
interface User {<br>
  age: number;<br>
}
</li>

<li>
2. Union(|) Interface দিয়ে করা যায় না | Type দিয়ে করা যায়<br>
Example:<br>
type ID = string | number;
</li>

<li>
3. interface সাধারণত object structure এর জন্য |<br>
যেমন:<br>
interface Person {<br>
  name: string;<br>
  age: number;<br>
}
<br>
অপর দিকে Type জটিল Type এর জন্য বেশি কার্যকর<br>যেমন: type:(union/intersection)|
</li>

</ul>
</p>
<hr>
** Qestion-2<br>
** Provide an example of using union and intersection types in TypeScript.

1. Union<br>
   মানে একটা ভ্যারিয়েবল একাধিক টাইপ নিতে পারে।<br>
   যেমন: userId String হতে পারে আবার Number ও হতে পারে তখন আমরা Union(|) ব্যবহার করে থাকি |<br>
   Example:<br>
   type unionTypeEx = {<br>
   userId: string | number;<br>
   }<br>

2. Intersection<br>
   মানে ২টা Type একসাথে হয়ে একটা বড় Type হবে<br>
   ধরে নেই আমার কাছে একটি User এর Type আছে name এবং id সামনে আমার আরেকটা বড় Type লাগবে যেইখানে name, id সাথে age লাগবে তখন new করে না লিখে শুধু ২টা কে একসাথে করে দিলেই হয়ে যাবে |<br>
   Example:<br>

   type User = {<br>
   id: number;<br>
   name: string;<br>
   };<br>
   type UserAge = {<br>
   age: number;<br>
   };<br>

type UserFullDetails = User & UserAge;<br>

Result: UserFullDetails = {<br>
id: number;<br>
name: string;<br>
age: number;<br>
}
