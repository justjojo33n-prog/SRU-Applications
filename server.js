const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();

app.use(cors());
app.use(express.json());


// PUT YOUR DISCORD WEBHOOK HERE
const WEBHOOK = "https://discord.com/api/webhooks/1527748515760046213/t0E6kGFeIHYYhb3RAPx8XWCj37TTfQRxfMtIGVbGpbTbho3qeEe0wCR_NuTlHvLOL3nB";


app.post("/application", async (req, res) => {

    const data = req.body;

    try {

        await axios.post(WEBHOOK, {

            embeds: [
                {
                    title: "🎓 New S.R.U Application",

                    color: 3447003,

                    fields: [

                        {
                            name: "📋 Type",
                            value: data.type || "Unknown"
                        },

                        {
                            name: "👤 Roblox Username",
                            value: data.username || "Unknown"
                        },

                        {
                            name: "💬 Discord Username",
                            value: data.discord || "Unknown"
                        },

                        {
                            name: "📚 Course / Role",
                            value: data.role || "Unknown"
                        },

                        {
                            name: "📝 Message",
                            value: data.message || "No message"
                        }

                    ],

                    footer: {
                        text: "Streaming Roblox University | S.R.U"
                    },

                    timestamp: new Date()

                }
            ]

        });


        res.json({
            success: true
        });


    } catch (error) {

        console.log(error);

        res.status(500).json({
            success: false
        });

    }

});



app.listen(3000, () => {

    console.log("🎓 S.R.U Server running on port 3000");

});
