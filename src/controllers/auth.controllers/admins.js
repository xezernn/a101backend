const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()

async function admins(req, res) {
    try {
        const users = await prisma.user.findMany({
            include: {
                password: false
            }
        })

        res.status(200).json(users)
    } catch (error) {
        res.status(500).json(error)
    }
}

module.exports = admins