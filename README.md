<div align="center">
    <img src="https://cdn.discordapp.com/attachments/1098174922951495680/1098174923232510002/Bit_Space.png" width="100" alt="Logo"/><br/>
    <h1 align="center">SURFACE</h1>
		<img alt="Stargazers" src="https://img.shields.io/github/stars/bitspaceorg/surface?style=for-the-badge&logo=starship&color=C9CBFF&logoColor=D9E0EE&labelColor=302D41">
  <a href="https://github.com/RahulNavneeth">
    <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"/>
  </a>
<img src="https://img.shields.io/badge/SvelteKit-FF3E00?style=for-the-badge&logo=Svelte&logoColor=white"/>
<img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"/>
<img src="https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white"/>
<img src="https://img.shields.io/badge/Supabase-181818?style=for-the-badge&logo=supabase&logoColor=white"/>
<img src="https://img.shields.io/badge/Socket.io-010101?&style=for-the-badge&logo=Socket.io&logoColor=white"/>
<img src="https://img.shields.io/badge/Buy_Me_A_Coffee-FFDD00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black"/>

<h6>
REVOLUTIONIZE YOUR VIRTUAL COLLABORATIONS WITH OUR WEB APP THAT COMBINES OPEN-SOURCE DESIGN TOOLS WITH SEAMLESS VIDEO CONFERENCING
</h6>
</div>

## DEMO / SCREENSHOTS

#### SINGLE USER

https://user-images.githubusercontent.com/50259284/235841709-46d3ef69-1a77-40c3-b36d-59dca9331b82.mov

#### MULTIPLE USER ACROSS THE GLOBE

https://user-images.githubusercontent.com/50259284/235841808-ce744859-2fc6-4268-8444-6873a00d1d92.mov

**JOIN VIA SHARING THE SAME ROOM CODE**

<img width=600 src="https://user-images.githubusercontent.com/50259284/235842306-c0124912-9d4d-417c-8084-4135b2d94469.png" />

<img width=600 src="https://user-images.githubusercontent.com/50259284/235842286-2827575f-b60c-4841-ba37-d07740671ee3.png" />


## HOW TO USE

### CLIENT & SERVER

1. CLONE THIS REPO
2. `npm i`
3. `cd server && npm i && cd ..`

#

### DATABASE

1. Head to [supabase](https://app.supabase.com)
2. Create a new project

**After initalizing**

3. Create `.env` in the root dir of the project

**Paste the below**

```
DIRECT_URL = "postgres://postgres:[PROJECT_PASSWORD]@db.[PROJECT_ID].supabase.co:5432/postgres"
 
DATABASE_URL = "postgres://postgres:[PROJECT_PASSWORD]@db.[PROJECT_ID].supabase.co:6543/postgres?pgbouncer=true"
```

Run the following command in root dir

```shell

npx prisma migrate dev --name init

npx prisma generate

```
#

### STARTING ON LOCALHOST

```shell

npm run dev

cd server

npm run start

```
# Contributors
  <img src = "https://contrib.rocks/image?repo=bitspaceorg/surface"/>
  
#
<div align=center>
<b>BREAK SOME CODE - GIVE A PR - HAFFUN</b>
</div>






