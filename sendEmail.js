const nodemailer = require("nodemailer");


async function sendEmail() {
    // start configuração do transporte
    let transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email", //Substitua aqui pelo servidor fornecido.
        port: 587, // Substitua aqui pela porta fornecido.
        secure: false, // STARTTLS
        auth: {
            user: "cornelius.sipes96@ethereal.email", // Substitua aqui pelo seu usuário do ethereal.
            pass: "eN8RKfUW6BkP7vRq6K", // Substitua aqui a sua senha do Ethereal.
        },
    });
    // end configuração do transporte

    // Configuração do e-mail
    let info = await transporter.sendMail({
        from: '"Seu Nome" <seuemail@dominio.com>',
        to: "destinatario@exemplo.com",
        subject: "Teste de Template HTML",
        html: `
            <!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Email Responsivo</title>

    <meta name="viewport" content="width=device-width, initial-scale=1">
    
</head>
<body style="margin: 0; padding: 0; background-color: #EDECEA; font-family: Helvetica, Arial, sans-serif;">
    <!--
    Regras :
    1) O gap entre os elementos será a partir de margin-top

    2) Cada "container" deve ser especificado a partir de quando começa ( start ) e quando termina ( end )

    3) A partir da criação de uma tag "Table", você deve colocar isto nela : cellspacing="0" cellpadding="0" style="border-collapse: collapse; border-spacing: 0"
    Esses dois atributos + essas duas estilizações removem o padding interno do table e o espaçamento entre as bordas que a tag table possui. Dessa forma,
    a tag "Table", literalmente se torna uma div com display grid onde você decide quantas colunas (td) e quantas linhas (tr) se tem cada conteiner (table).
    
    4) o border-collapse: collapse remove o padding, então quando precisar usar padding, remova-o.
    -->

    <!-- Conteiner da página inteira -->
    <table style="padding: 0; border: none; width: 100%; height: 100%;" align="center"
    cellspacing="0" cellpadding="0">
        <tr>
            <td>
                <!-- start margin 80px -->
                <table class="margin1" style="border-collapse: collapse; border-spacing: 0;" cellspacing="0" cellpadding="0">
                    <tr>
                        <td height="80px" style="line-height: 80px; font-size: 0;">&nbsp;</td>
                    </tr>
                </table>
                <!-- end margin 80px -->

                <!-- Conteiner do conteúdo do e-mail marketing -->
                <table align="center" style="width: 600px; border-spacing: 0; padding: 20px;
                border-top: 16px solid #09002C; border-radius: 0 0 7px 7px; border-left: solid 1px #ced2d6;
                border-right: solid 1px #ced2d6; border-bottom: solid 1px #ced2d6; background-color: #FFFFFF;"
                cellspacing="0" cellpadding="0" class="email__marketing__container">
                    <tr>
                        <td>
                            <!-- start header__container -->
                            <table style="padding: 0 16px 0 16px; border-spacing: 0;"
                            cellspacing="0" cellpadding="0" class="header__container">
                                <tr>
                                    <td>
                                        <!-- start margin 24px -->
                                        <table style="border-collapse: collapse; border-spacing: 0;" cellspacing="0" cellpadding="0">
                                            <tr>
                                                <td height="24px" style="line-height: 24px; font-size: 0;">&nbsp;</td>
                                            </tr>
                                        </table>
                                        <!-- end margin 24px -->

                                        <!-- start header__apresentation__company -->
                                        <table style="border-collapse: collapse; border-spacing: 0;"
                                        cellspacing="0" cellpadding="0">
                                            <tr>
                                                <td style="font-size: 13px; font-weight: 400; color: #68717c;">
                                                    Circle / <span style="font-size: 16px; font-weight: 700; color: #C6977D;">[nome da empresa]</span>
                                                </td>
                                            </tr>
                                        </table>
                                        <!-- end header__apresentation__company -->

                                        <!-- start header__status -->
                                        <table style="border-collapse: collapse; border-spacing: 0;" cellspacing="0" cellpadding="0">
                                            <tr>
                                                <td>
                                                    <!-- start margin 56px -->
                                                    <table style="border-collapse: collapse; border-spacing: 0;" cellspacing="0" cellpadding="0">
                                                        <tr>
                                                            <td height="56px" style="line-height: 56px; font-size: 0;">&nbsp;</td>
                                                        </tr>
                                                    </table>
                                                    <!-- end margin 56px -->

                                                    <!-- start header__apresentation__title -->
                                                    <table style="border-collapse: collapse; border-spacing: 0;" cellspacing="0"
                                                    cellpadding="0">
                                                       <tr>
                                                        <td style="font-size: 24px; font-weight: 400; color: #00637A;">
                                                            Olá, <span style="font-weight: 700;">[Nome usuário]</span> seja bem vindo!
                                                        </td>
                                                       </tr>
                                                    </table>
                                                    <!-- end header__apresentation__title -->

                                                    <!-- start margin 16px -->
                                                    <table style="border-collapse: collapse; border-spacing: 0;" cellspacing="0" cellpadding="0">
                                                        <tr>
                                                            <td height="16px" style="line-height: 16px; font-size: 0;">&nbsp;</td>
                                                        </tr>
                                                    </table>
                                                    <!-- end margin 16px -->

                                                    <!-- start header__apresentation__subtitle -->
                                                    <table style="border-collapse: collapse; border-spacing: 0;" 
                                                    cellspacing="0" cellpadding="0">
                                                        <tr>
                                                            <td>
                                                                <span style="color: #68717c; background-color: #d5d5d4; padding: 4px;
                                                                font-weight: 400; font-size: 13px; width: 61px">Cadastro</span>

                                                                <!-- start margin right (gap) -->
                                                                <span class="margin2" style="display: inline-block; line-height: 1px; font-size: 0; width: 1px;">&nbsp;</span>
                                                                <!-- end margin right (gap) -->

                                                                <!-- start responsividade -->
                                                                <br style="display: none;" class="break1">

                                                                <table style="border-collapse: collapse; border-spacing: 0; display: none;" 
                                                                cellspacing="0" cellpadding="0" class="margin4">
                                                                    <tr>
                                                                        <td height="8" style="line-height: 8px; font-size: 0;">&nbsp;</td>
                                                                    </tr>
                                                                </table>
                                                                <!-- end responsividade -->

                                                                <span style="color: #F05E25; background-color: #EEE9D5; padding: 4px; 
                                                                font-weight: 400; font-size: 13px; width: 240px;">🟠 Aguardando confirmação de e-mail</span>
                                                                
                                                            </td>
                                                        </tr>
                                                    </table>
                                                    <!-- end header__apresentation__subtitle -->
                                                </td>
                                            </tr>
                                        </table>
                                        <!-- end header__status -->
                                    </td>
                                </tr>
                            </table>
                            <!-- end header__container -->

                            <!-- start margin 56px -->
                            <table style="border-collapse: collapse; border-spacing: 0;" cellspacing="0" cellpadding="0">
                                <tr>
                                    <td height="56px" style="line-height: 56px; font-size: 0;">&nbsp;</td>
                                </tr>
                            </table>
                            <!-- end margin 56px -->

                            <!-- start main__container -->
                             <table style="padding: 0 16px 0 16px; border-spacing: 0;"
                             cellspacing="0" cellpadding="0" class="main__container">
                                <tr>
                                    <td>
                                        <!-- start main__description -->
                                         <table style="border-collapse: collapse; border-spacing: 0;" cellspacing="0" cellpadding="0">
                                            <tr>
                                                <td style="font-size: 16px; font-weight: 400; color: #68717c;">
                                                    Recebemos uma solicitação de cadastro do e-mail [E-MAIL DA PESSOA] para o portal circle da [EMPRESA]
                                                    <br>
                                                    <br>
                                                    Falta só um passo para você começar a aproveitar as
                                                    vantagens da automatização no processo de ingresso fiscal.
                                                    Valide seu cadastro confirmando o seu e-mail na plataforma;
                                                </td>
                                            </tr>
                                         </table>
                                        <!-- end main__description -->

                                         <!-- start margin 56px -->
                                         <table style="border-collapse: collapse; border-spacing: 0;" cellspacing="0" cellpadding="0">
                                            <tr>
                                                <td height="56px" style="line-height: 56px; font-size: 0;">&nbsp;</td>
                                            </tr>
                                        </table>
                                        <!-- end margin 56px -->

                                        <!-- start main__button -->
                                         <table style="border-collapse: collapse; border-spacing: 0;" align="center"
                                         cellspacing="0" cellpadding="0">
                                            <tr>
                                                <td>
                                                    <table style="border-collapse: collapse; border-spacing: 0;" cellspacing="0" cellpadding="0">
                                                        <tr>
                                                            <td>
                                                                <a style="padding: 16px 48px 16px 48px; background-color: #09002C;
                                                                color: #FFFFFF; font-size: 16px; font-weight: 700; border-radius: 6px;
                                                                cursor: pointer; border: none; text-decoration: none;" href="">Confirmar e-mail</a> 
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                         </table>
                                        <!-- end main__button -->

                                        <!-- start margin 16px -->
                                        <table style="border-collapse: collapse; border-spacing: 0;" cellspacing="0" cellpadding="0">
                                            <tr>
                                                <td height="16px" style="line-height: 16px; font-size: 0;">&nbsp;</td>
                                            </tr>
                                        </table>
                                        <!-- end margin 16px -->

                                        <!-- start main__button__subtitle-->
                                        <table style="border-collapse: collapse; border-spacing: 0;" align="center"
                                        cellspacing="0" cellpadding="0">
                                            <tr>
                                                <td>
                                                    <table cellspacing="0" cellpadding="0" style="border-collapse: collapse; border-spacing: 0">
                                                        <tr>
                                                            <td>
                                                                <span style="font-size: 13px; color: #68717c;
                                                                font-weight: 400;">ou</span> <a style="color: #09002C; text-decoration: none; 
                                                                cursor: pointer; font-size: 13px;">https://link.exemplo/Dh3Adfhi3Afhiaijs#jfioa</a>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                        </table>
                                        <!-- end main__button__subtitle-->
                                    </td>
                                </tr>
                             </table>
                            <!-- end main__container -->

                            <!-- start margin 64px -->
                            <table style="border-collapse: collapse; border-spacing: 0;" cellspacing="0" cellpadding="0">
                                <tr>
                                    <td height="64px" style="line-height: 64px; font-size: 0;">&nbsp;</td>
                                </tr>
                            </table>
                            <!-- end margin 64px -->

                            <!-- start main__footer__container -->
                            <table cellspacing="0" cellpadding="0" style="padding: 0 16px 32px 16px; border-spacing: 0"
                            class="main__footer__container">
                                <tr>
                                    <td>
                                        <table cellspacing="0" cellpadding="0" style="border-collapse: collapse; border-spacing: 0">
                                            <tr>
                                                <td style="font-size: 16px; color: #68717c;">
                                                    *Esse cadastro pode ter sido solicitado pelos administradores da [EMPRESA].
                                                    Se você não conhece o pedido, aguarde a expiração do cadastro ou entre
                                                    em contato com [E-mail do N1]
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>
                            <!-- end main__footer__container -->

                            <!-- start margin 32px -->
                            <table style="border-collapse: collapse; border-spacing: 0;" cellspacing="0" cellpadding="0">
                                <tr>
                                    <td height="32px" style="line-height: 32px; font-size: 0;">&nbsp;</td>
                                </tr>
                            </table>
                            <!-- end margin 32px -->
                        </td>
                    </tr>
                </table>
            <!-- End Conteiner Email-Marketing --> 
             
            <!-- start margin 16px -->
            <table style="border-collapse: collapse; border-spacing: 0;" cellspacing="0" cellpadding="0">
                <tr>
                    <td height="16px" style="line-height: 16px; font-size: 0;">&nbsp;</td>
                </tr>
            </table>
            <!-- end margin 16px -->

            <!-- start footer__container -->
             <table cellspacing="0" cellpadding="0" align="center"
              class="footer__container" style="border-spacing: 0; width: 600px;
             background-color: #FFFFFF; border: 1px solid #ced2d6; padding: 36px; border-radius: 6px;">
             
                <tr>
                    <td>
                        <!-- start footer__decription -->
                        <table cellspacing="0" cellpadding="0" border-spacing: 0;">
                            <tr>
                                <td>
                                    <!-- start footer__text1 -->
                                    <table cellspacing="0" cellpadding="0" style="border-collapse: collapse; border-spacing: 0">
                                        <tr>
                                            <td style=" font-size: 16px; color: #68717c; font-weight: 400;">
                                                Atenciosamente,
                                                <br>
                                                <span style="font-size: 16px; font-weight: 700; color: #C6977D;
                                                ">Equipe Circle & [nome da empresa]</span>
                                            </td>
                                            <td>

                                            </td>
                                        </tr>
                                    </table>
                                    <!-- end footer__text1 -->

                                    <!-- start margin 32px -->
                                    <table style="border-collapse: collapse; border-spacing: 0;" cellspacing="0" cellpadding="0">
                                        <tr>
                                            <td height="32px" style="line-height: 32px; font-size: 0;">&nbsp;</td>
                                        </tr>
                                    </table>
                                    <!-- end margin 32px -->

                                    <!-- start footer__text2 -->
                                    <table cellspacing="0" cellpadding="0" style="border-collapse: collapse; border-spacing: 0;">
                                        <tr>
                                            <td style=" font-size: 16px; color: #68717c; font-weight: 400;">
                                                Circle Tecnologia LTDA
                                                <br>
                                                <a style="color: #09002C; cursor: pointer;
                                                font-size: 16px;" href="">https://link.exemplo/</a>
                                            </td>
                                        </tr>
                                    </table>
                                    <!-- end footer__text2 -->
                                </td>

                                <!-- start margin 16px -->
                                <td height="1px" style="line-height: 1px; font-size: 0; display: inline-block;
                                width: 170px;" class="margin3">&nbsp;</td>
                                <!-- end margin 16px -->

                                <!-- start footer__logo -->
                                <td>
                                    <span class="footer__logo" style="width: 60px; height: 60px; border-radius: 50%;
                                    border: 7px solid #B0B0B0; background: transparent; display: inline-block;"></span>
                                    </span>
                                </td>
                                <!-- end footer__logo -->

                            </tr>
                        </table>
                        <!-- end footer__description -->
                    </td>
                </tr>
             </table>
            <!-- end footer__container -->

            <!-- start automatic__message -->
             <table cellspacing="0" cellpadding="0" align="center" style=" padding: 48px 16px 56px 16px;
             border-spacing: 0" class="automatic__message">
                <tr>
                    <td align="center" style="font-size: 16px; color: #68717c; font-weight: 400">
                        <span style="font-weight: 700;">
                        Essa é uma mensagem automática, não responda este e-mail.</span>
                        <br>
                        Em caso de dúvida, entre em contato com [E-mail do N1]
                    </td>
                </tr>
             </table>
            <!-- end automatic__message -->
            
            </td>
        </tr>
    </table>
<!-- End conteiner de toda a pagina -->

<!-- start responsividade -->
    <style>
        @media (max-width:600px) {
            .email__marketing__container {
                width: 98% !important;
            }

            .footer__container {
                width: 98% !important;
            }

            .automatic__message {
                width: 100% !important;
            }
            
            .margin1 {
                display: none !important;
            }

            .margin2 {
                display: none !important;
            }

            .break1 {
                display: block !important;
            }

            .margin4 {
                display: block !important;
            }

            .margin3 {
                display: none !important;
            }

            .footer__logo {
                display: none !important;
            }

            .header__container {
                padding: 0 !important;
            }

            .main__container {
                padding: 0 !important;
            }

            .main__footer__container {
                padding: 0 0 32px 0 !important;
            }

            .footer__container {
                padding: 36px 16px 36px 16px !important;
            }

            .automatic__message {
                padding: 48px 0 56px 0 !important;
            }
        }
    </style>
<!-- end responsividade -->
</body>
</html>

        `,
    });

    console.log("E-mail enviado: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}

// Executa a função
sendEmail().catch(console.error);
