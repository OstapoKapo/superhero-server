<div align="left" style="position: relative;">
<img src="https://img.icons8.com/?size=512&id=55494&format=png" align="right" width="30%" style="margin: -20px 0 0 20px;">
<h1>SUPERHERO-SERVER</h1>
<p align="left">
	<img src="https://img.shields.io/github/license/OstapoKapo/superhero-server?style=default&logo=opensourceinitiative&logoColor=white&color=0080ff" alt="license">
	<img src="https://img.shields.io/github/last-commit/OstapoKapo/superhero-server?style=default&logo=git&logoColor=white&color=0080ff" alt="last-commit">
	<img src="https://img.shields.io/github/languages/top/OstapoKapo/superhero-server?style=default&color=0080ff" alt="repo-top-language">
	<img src="https://img.shields.io/github/languages/count/OstapoKapo/superhero-server?style=default&color=0080ff" alt="repo-language-count">
</p>
<p align="left"><!-- default option, no dependency badges. -->
</p>
<p align="left">
	<!-- default option, no dependency badges. -->
</p>
</div>
<br clear="right">

##  Table of Contents

- [ Overview](#-overview)
- [ Features](#-features)
- [ Project Structure](#-project-structure)
  - [ Project Index](#-project-index)
- [ Getting Started](#-getting-started)
  - [ Prerequisites](#-prerequisites)
  - [ Installation](#-installation)
  - [ Usage](#-usage)
  - [ Testing](#-testing)
- [ Contributing](#-contributing)


---
##  Features

**NestJS Framework** – modular architecture, dependency injection, and scalability out of the box.  
- **Prisma ORM** – type-safe database client for PostgreSQL, easy schema migrations and queries.  
- **PostgreSQL Database** – reliable relational database with support for complex queries and relations.  
- **REST API Endpoints** – CRUD operations for heroes (create, read, update, delete).  
- **DTO & Validation** – strict data transfer objects with validation using `class-validator`.  
- **Error Handling** – global exception filters for consistent API error responses.  
- **Environment Configuration** – `.env` file support for database credentials and secrets.  
- **Code-first Structure** – clear separation into modules, services, and controllers.  
- **Scalability Ready** – easy to extend with additional entities (e.g., powers, teams)

---

##  Project Structure

```sh
└── superhero-server/
    ├── Dockerfile
    ├── README.md
    ├── config
    │   └── cloudinary.config.ts
    ├── eslint.config.mjs
    ├── nest-cli.json
    ├── package-lock.json
    ├── package.json
    ├── prisma
    │   ├── migrations
    │   └── schema.prisma
    ├── src
    │   ├── app.controller.ts
    │   ├── app.module.ts
    │   ├── app.service.ts
    │   ├── cloudinary
    │   ├── common
    │   ├── main.ts
    │   ├── prisma
    │   └── superhero
    ├── test
    │   ├── cloudinary
    │   ├── jest-e2e.json
    │   └── superhero
    ├── tsconfig.build.json
    └── tsconfig.json
```


###  Project Index
<details open>
	<summary><b><code>SUPERHERO-SERVER/</code></b></summary>
	<details> <!-- __root__ Submodule -->
		<summary><b>__root__</b></summary>
		<blockquote>
			<table>
			<tr>
				<td><b><a href='https://github.com/OstapoKapo/superhero-server/blob/master/package-lock.json'>package-lock.json</a></b></td>
				<td><code>❯ REPLACE-ME</code></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/OstapoKapo/superhero-server/blob/master/tsconfig.json'>tsconfig.json</a></b></td>
				<td><code>❯ REPLACE-ME</code></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/OstapoKapo/superhero-server/blob/master/eslint.config.mjs'>eslint.config.mjs</a></b></td>
				<td><code>❯ REPLACE-ME</code></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/OstapoKapo/superhero-server/blob/master/tsconfig.build.json'>tsconfig.build.json</a></b></td>
				<td><code>❯ REPLACE-ME</code></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/OstapoKapo/superhero-server/blob/master/nest-cli.json'>nest-cli.json</a></b></td>
				<td><code>❯ REPLACE-ME</code></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/OstapoKapo/superhero-server/blob/master/package.json'>package.json</a></b></td>
				<td><code>❯ REPLACE-ME</code></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/OstapoKapo/superhero-server/blob/master/Dockerfile'>Dockerfile</a></b></td>
				<td><code>❯ REPLACE-ME</code></td>
			</tr>
			</table>
		</blockquote>
	</details>
	<details> <!-- src Submodule -->
		<summary><b>src</b></summary>
		<blockquote>
			<table>
			<tr>
				<td><b><a href='https://github.com/OstapoKapo/superhero-server/blob/master/src/app.controller.ts'>app.controller.ts</a></b></td>
				<td><code>❯ REPLACE-ME</code></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/OstapoKapo/superhero-server/blob/master/src/app.module.ts'>app.module.ts</a></b></td>
				<td><code>❯ REPLACE-ME</code></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/OstapoKapo/superhero-server/blob/master/src/app.service.ts'>app.service.ts</a></b></td>
				<td><code>❯ REPLACE-ME</code></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/OstapoKapo/superhero-server/blob/master/src/main.ts'>main.ts</a></b></td>
				<td><code>❯ REPLACE-ME</code></td>
			</tr>
			</table>
			<details>
				<summary><b>prisma</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/OstapoKapo/superhero-server/blob/master/src/prisma/prisma.module.ts'>prisma.module.ts</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/OstapoKapo/superhero-server/blob/master/src/prisma/prisma.service.ts'>prisma.service.ts</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					</table>
				</blockquote>
			</details>
			<details>
				<summary><b>superhero</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/OstapoKapo/superhero-server/blob/master/src/superhero/superhero.module.ts'>superhero.module.ts</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/OstapoKapo/superhero-server/blob/master/src/superhero/superhero.controller.ts'>superhero.controller.ts</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/OstapoKapo/superhero-server/blob/master/src/superhero/superhero.service.ts'>superhero.service.ts</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					</table>
				</blockquote>
			</details>
			<details>
				<summary><b>common</b></summary>
				<blockquote>
					<details>
						<summary><b>dto</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/OstapoKapo/superhero-server/blob/master/src/common/dto/create-change.dto.ts'>create-change.dto.ts</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>middleware</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/OstapoKapo/superhero-server/blob/master/src/common/middleware/corellation-id.middleware.ts'>corellation-id.middleware.ts</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>filter</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/OstapoKapo/superhero-server/blob/master/src/common/filter/httpException.filter.ts'>httpException.filter.ts</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/OstapoKapo/superhero-server/blob/master/src/common/filter/prismaClientException.filter.ts'>prismaClientException.filter.ts</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							</table>
						</blockquote>
					</details>
				</blockquote>
			</details>
			<details>
				<summary><b>cloudinary</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/OstapoKapo/superhero-server/blob/master/src/cloudinary/cloudinary.module.ts'>cloudinary.module.ts</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/OstapoKapo/superhero-server/blob/master/src/cloudinary/cloudinary.service.ts'>cloudinary.service.ts</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					</table>
				</blockquote>
			</details>
		</blockquote>
	</details>
	<details> <!-- prisma Submodule -->
		<summary><b>prisma</b></summary>
		<blockquote>
			<table>
			<tr>
				<td><b><a href='https://github.com/OstapoKapo/superhero-server/blob/master/prisma/schema.prisma'>schema.prisma</a></b></td>
				<td><code>❯ REPLACE-ME</code></td>
			</tr>
			</table>
			<details>
				<summary><b>migrations</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/OstapoKapo/superhero-server/blob/master/prisma/migrations/migration_lock.toml'>migration_lock.toml</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					</table>
					<details>
						<summary><b>20250912024812_init</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/OstapoKapo/superhero-server/blob/master/prisma/migrations/20250912024812_init/migration.sql'>migration.sql</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>20250914022512_change_on_delete</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/OstapoKapo/superhero-server/blob/master/prisma/migrations/20250914022512_change_on_delete/migration.sql'>migration.sql</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>20250913235446_add_unqiue_to_nickname</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/OstapoKapo/superhero-server/blob/master/prisma/migrations/20250913235446_add_unqiue_to_nickname/migration.sql'>migration.sql</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							</table>
						</blockquote>
					</details>
				</blockquote>
			</details>
		</blockquote>
	</details>
	<details> <!-- config Submodule -->
		<summary><b>config</b></summary>
		<blockquote>
			<table>
			<tr>
				<td><b><a href='https://github.com/OstapoKapo/superhero-server/blob/master/config/cloudinary.config.ts'>cloudinary.config.ts</a></b></td>
				<td><code>❯ REPLACE-ME</code></td>
			</tr>
			</table>
		</blockquote>
	</details>
	<details> <!-- test Submodule -->
		<summary><b>test</b></summary>
		<blockquote>
			<table>
			<tr>
				<td><b><a href='https://github.com/OstapoKapo/superhero-server/blob/master/test/jest-e2e.json'>jest-e2e.json</a></b></td>
				<td><code>❯ REPLACE-ME</code></td>
			</tr>
			</table>
			<details>
				<summary><b>superhero</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/OstapoKapo/superhero-server/blob/master/test/superhero/superhero.service.spec.ts'>superhero.service.spec.ts</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					</table>
				</blockquote>
			</details>
			<details>
				<summary><b>cloudinary</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/OstapoKapo/superhero-server/blob/master/test/cloudinary/cloudinary.service.spec.ts'>cloudinary.service.spec.ts</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					</table>
				</blockquote>
			</details>
		</blockquote>
	</details>
</details>

---
##  Getting Started

###  Prerequisites

Before getting started with superhero-server, ensure your runtime environment meets the following requirements:

- **Programming Language:** TypeScript
- **Package Manager:** Npm
- **Container Runtime:** Docker


###  Installation

Install superhero-server using one of the following methods:

**Build from source:**

1. Clone the superhero-server repository:
```sh
❯ git clone https://github.com/OstapoKapo/superhero-server
```

2. Navigate to the project directory:
```sh
❯ cd superhero-server
```

3. Install the project dependencies:


**Using `npm`** &nbsp; [<img align="center" src="https://img.shields.io/badge/npm-CB3837.svg?style={badge_style}&logo=npm&logoColor=white" />](https://www.npmjs.com/)

```sh
❯ npm install
```


**Using `docker`** &nbsp; [<img align="center" src="https://img.shields.io/badge/Docker-2CA5E0.svg?style={badge_style}&logo=docker&logoColor=white" />](https://www.docker.com/)

```sh
❯ docker build -t OstapoKapo/superhero-server .
```




###  Usage
Run superhero-server using the following command:
**Using `npm`** &nbsp; [<img align="center" src="https://img.shields.io/badge/npm-CB3837.svg?style={badge_style}&logo=npm&logoColor=white" />](https://www.npmjs.com/)

```sh
❯ npm start
```


**Using `docker`** &nbsp; [<img align="center" src="https://img.shields.io/badge/Docker-2CA5E0.svg?style={badge_style}&logo=docker&logoColor=white" />](https://www.docker.com/)

```sh
❯ docker run -it {image_name}
```


###  Testing
Run the test suite using the following command:
**Using `npm`** &nbsp; [<img align="center" src="https://img.shields.io/badge/npm-CB3837.svg?style={badge_style}&logo=npm&logoColor=white" />](https://www.npmjs.com/)

```sh
❯ npm test
```


---

##  Contributing

Сontributions, issues, and feature requests are welcome!  
Feel free to check the [issues page](https://github.com/OstapoKapo/superhero-server/issues).
