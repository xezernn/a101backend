const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()

async function deleteAdmin(req, res) {
    try {
        const id = +req.params.id
        const userid = req.user.id

        if(userid != 1) return res.status(403).json({error:"Adminlerin silinməsinə yalniz super adminin icazəsi var! Super Admin: xezer "})


        if (!id) {
            return res.status(400).json({ error: "Adminin id-si mutleq gonderilmelidir!" })
        }

        const deleteUser = await prisma.user.delete({
            where: {
                id: id,
            },
        })

        if (!deleteUser) {
            return res.status(404).json({ error: 'Bele istifadeçi yoxdur!' });
        }


        res.status(200).json({
            "mesaj": "İstifadəçi müvəffəqiyyətlə silindi!",
            deleteUser
        })


    } catch (error) {
        if (error.code == "P2025") {
            return res.status(404).json({ error: 'Bele istifadeçi yoxdur!' });
        }
        res.status(500).json(error)
    }
}

module.exports = deleteAdmin