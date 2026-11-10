import login from "./login.html"
import home from "./index.html"
import jogo from "./jogo.html"
import ranking from "./ranking.html"
import jogoComparacao from "./jogocomparacao.html"
import { db } from "./db.ts"

const logger: any = {}

const srv = Bun.serve({
    port: 3000,
    routes: {
        "/": login,
        "/home": home,
        "/jogo": jogo,
        "/jogoComparacao": jogoComparacao,
        "/ranking": ranking,
        "/user": {
            POST: async (req) => {
                const body = await req.body?.json()
                const query = db.query(`
                    INSERT INTO user (username, password_hash) 
                    VALUES (:username, :password_hash);
                    `)
                const hash = await Bun.password.hash(body.password)
                const data = query.run({ ":username": body.username, ":password_hash": hash })
                return Response.json(data)
            }
        },

        "/login": {
            POST: async (req) => {
                const body = await req.body?.json()
                const query = db.query(`SELECT * FROM user WHERE username=:username LIMIT 1`)
                const data: any = query.get({
                    ":username": body.username
                })
                if (!data) {
                    return Response.json(
                        { msg: "usuario nao encontrado" },
                        { status: 404 }
                    )
                }
                const hash = data.password_hash
                const ismatch = await Bun.password.verify(body.password, hash)

                if (!ismatch) {
                    return Response.json({ msg: "nao senha" }, { status: 401 })
                }
                const uuid = crypto.randomUUID()
                delete data.password_hash
                logger[uuid] = data
                req.cookies.set("ses", uuid)
                return Response.json(ismatch)
            }
        },
        "/login/user": (req) => {
            const ses = req.cookies.get("ses") as string 
            const data = logger[ses]
            if (!ses || !data) {
                return Response.json({ msg: "usuário não logado" }, { status: 401 })
            }
            return Response.json(data)
        },
        "/partidas": {
            POST: async (req) => {
                const ses = req.cookies.get("ses") as string;
                const usuario = logger[ses];

                if (!usuario) {
                    return Response.json(
                        { msg: "Usuário não logado" },
                        { status: 401 }
                    )
                }

                const body = await req.body?.json()
                const porcentagem = (body.acertos / body.rodadas) * 100;
                const query = db.query(`
                    INSERT INTO partidas (user_id, modo, acertos, rodadas, porcentagem ) 
                    VALUES (:user_id, :modo, :acertos, :rodadas, :porcentagem);
                    `)
                const data = query.run({
                    ":user_id": usuario.id,
                    ":modo": body.modo,
                    ":acertos": body.acertos,
                    ":rodadas": body.rodadas,
                    ":porcentagem": porcentagem,
                })

                return Response.json(data)
            }
        },
        "/lista": {
            GET: async (req) => {
                const ses = req.cookies.get("ses") as string;
                console.log("Logger na partida:", logger);
                const usuario = logger[ses];
                console.log("Cookie recebido:", ses);
                console.log("Usuário encontrado:", usuario);

                if (!usuario) {
                    return Response.json(
                        { msg: "Usuário não logado" },
                        { status: 401 }
                    )
                }

                const url = new URL(req.url);
                const modo = url.searchParams.get("modo");
                const query = db.query(`
                     SELECT 
                    user.username,
                    partidas.user_id,
                    AVG(partidas.porcentagem) AS media,
                    MAX(partidas.porcentagem) AS maior
                    FROM partidas
                    INNER JOIN user ON partidas.user_id = user.id
                    WHERE partidas.modo = :modo
                    GROUP BY partidas.user_id, user.username
                    ORDER BY maior DESC, media DESC
                    LIMIT 10`)
                const ranking = query.all({ ":modo": modo });
                console.log(ranking)
                return Response.json(ranking)


            }
        }

    }
})

console.log(`Server running at ${srv.url}`)