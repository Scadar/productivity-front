import React, { FC, useState } from "react";
import { Box, Container, IconButton, useTheme } from "@mui/material";
import LeftMenu from "./LeftMenu";
import MenuIcon from "@mui/icons-material/Menu";
import useWindowDimensions from "../hooks/useWindowDimensions";

const Layout: FC = () => {
    const theme = useTheme();
    const dimensions = useWindowDimensions();
    const [leftMenuOpen, setLeftMenuOpen] = useState(dimensions.width > theme.breakpoints.values.md);

    return (
        <Box sx={ { overflow: "hidden" } }>
            <Box
                sx={ theme => ({
                    display: "flex",
                    flexDirection: "column",
                    height: "100vh",
                    backgroundColor: theme.palette.common.white
                }) }
            >
                <Box
                    sx={ {
                        overflow: "hidden",
                        background: "red",
                        height: "44px",
                        zIndex: 200,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        px: 3
                    } }>
                    <Box
                        sx={ {
                            height: "100%",
                            width: "100%",
                            display: "flex",
                            justifyContent: "space-between"
                        } }
                    >
                        <IconButton
                            color="inherit"
                            size="small"
                            edge="start"
                            onClick={ () => setLeftMenuOpen(prevState => !prevState) }
                        >
                            <MenuIcon/>
                        </IconButton>
                        <IconButton
                        >
                            <MenuIcon/>
                        </IconButton>
                    </Box>

                </Box>
                <Box
                    sx={ {
                        display: "flex",
                        flexDirection: "column",
                        overflow: "hidden"
                    } }
                >
                    <Box
                        sx={ theme => ({
                            [theme.breakpoints.down("md")]: {
                                position: "fixed",
                                width: "100%",
                                height: "100%",
                                zIndex: 198,
                                backgroundColor: "rgba(0, 0, 0, 0.5)",
                                transition: `all .25s ${ theme.transitions.easing.easeInOut }`,
                                opacity: leftMenuOpen ? 1 : 0,
                                visibility: leftMenuOpen ? "visible" : "hidden"
                            }
                        }) }
                        onClick={ () => setLeftMenuOpen(false) }
                    />
                    <Box
                        sx={ {
                            display: "flex",
                            flexGrow: 1,
                            flexDirection: "column",
                            overflow: "hidden"
                        } }
                    >
                        <Box
                            sx={ theme => ({
                                width: "305px",
                                height: "calc(100vh - 44px)",
                                left: leftMenuOpen ? 0 : "-425px",
                                transition: `left 0.25s ${ theme.transitions.easing.easeInOut }`,
                                overflowX: "hidden",
                                overflowY: "hidden",
                                backgroundColor: "#fafafa",
                                position: "fixed",
                                zIndex: 199
                            }) }
                        >
                            <LeftMenu/>
                        </Box>
                        <Box
                            component="main"
                            sx={ theme => ({
                                marginLeft: leftMenuOpen ? "305px" : "0px",
                                transition: `margin-left 0.25s ${ theme.transitions.easing.easeInOut }`,
                                overflowX: "hidden",
                                overflowY: "auto",
                                position: "relative",
                                [theme.breakpoints.down("md")]: {
                                    marginLeft: 0
                                }
                            }) }
                        >
                            <Container maxWidth="xl" sx={ { overflowX: "auto" } }>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, consequatur
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, consequatur
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, consequatur
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, consequatur
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, consequatur
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, consequatur
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, consequatur
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, consequatur
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, consequatur
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, consequatur
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, consequatur
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, consequatur
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, consequatur
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, consequatur
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, consequatur
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, consequatur
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, consequatur
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, consequatur
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, consequatur
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, consequatur
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, consequatur
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, consequatur
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, consequatur
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, consequatur
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, consequatur
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, consequatur
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, consequatur
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, consequatur
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, consequatur
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, consequatur
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, consequatur
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, consequatur
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, consequatur
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, consequatur
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, consequatur
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, consequatur
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, consequatur
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, consequatur
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, consequatur
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, consequatur
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, consequatur
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, consequatur
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, consequatur
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, consequatur
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, consequatur
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, consequatur
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, consequatur
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, consequatur
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, consequatur
                                deserunt
                                inventore
                                laborum magni nihil officia qui quia quo recusandae vel veritatis voluptatem? Cum error
                                illo
                                porro
                                qui ratione soluta sunt ut! Ab ad, culpa debitis dignissimos doloribus dolorum, eligendi
                                et
                                exercitationem hic illum impedit in, magni maxime minus modi nam natus nihil nulla
                                numquam
                                officia
                                perspiciatis quibusdam reprehenderit repudiandae soluta tenetur ullam velit vitae. A
                                aliquid
                                assumenda aut beatae cumque dignissimos doloribus eligendi enim eos fugit, harum, hic id
                                perspiciatis vel veritatis voluptatibus voluptatum. At ea eius eligendi et illo impedit
                                magni
                                provident unde veritatis. Assumenda error nostrum unde velit voluptates. A animi aut
                                dolor
                                ea
                                excepturi exercitationem, id odit, perferendis perspiciatis, qui repudiandae sapiente
                                sunt
                                voluptatem. Aliquam consequatur delectus dolores ea eligendi ex illo, incidunt inventore
                                laudantium,
                                nam odio officiis provident quidem quisquam voluptatum! Corporis dolorem ducimus eos eum
                                fugiat
                                harum ipsum laudantium, maiores minus numquam, quisquam saepe vero, voluptatum.
                                Consequatur
                                ducimus
                                libero suscipit! Ea eaque, error excepturi expedita hic, illum laboriosam laborum nam
                                natus
                                neque,
                                nobis non placeat quidem repellendus tenetur voluptatem voluptates! Dignissimos fuga
                                repellat
                                similique tenetur. Dolor excepturi ipsa minima placeat repudiandae. Accusantium alias
                                aliquam aut,
                                autem corporis cupiditate deleniti dicta ea error ex impedit iure iusto laborum magni
                                modi
                                necessitatibus nesciunt obcaecati optio placeat possimus quia quibusdam quidem quo
                                reprehenderit
                                rerum saepe ullam voluptas! Adipisci assumenda ea est facilis, fuga hic illo incidunt
                                ipsam
                                maiores
                                minima molestias nemo quas quibusdam quisquam recusandae sunt vel veritatis vero.
                                Consequatur dicta
                                distinctio esse, excepturi facere, maxime perspiciatis quibusdam quis quod reiciendis
                                rerum
                                tempora
                                temporibus ullam unde vel? Aperiam beatae enim exercitationem nemo nulla omnis possimus
                                similique! A
                                beatae debitis doloribus enim illum in, inventore laborum maxime, necessitatibus
                                provident
                                quam
                                repellat repellendus temporibus totam ullam. Earum, labore, quia. Ad adipisci amet animi
                                assumenda,
                                blanditiis consequatur cumque dignissimos distinctio excepturi fuga itaque magnam maxime
                                minima,
                                molestias nemo nihil obcaecati officia officiis quasi quia quis quo sint suscipit
                                tempore
                                totam? At
                                blanditiis cumque id impedit ipsam laboriosam laudantium, omnis repellat tempora.
                                Adipisci
                                blanditiis dolorum eligendi eum explicabo inventore natus nihil officiis omnis possimus,
                                quo
                                quos
                                similique sunt. Cupiditate quam sint ut vel veniam voluptate? Commodi exercitationem
                                optio
                                perspiciatis soluta voluptas! Aliquid culpa deserunt distinctio ea explicabo facere
                                fugit
                                laborum
                                magni maxime nam nostrum odit officia praesentium, sed sint sunt suscipit tempora velit,
                                voluptate
                                voluptatibus? Aliquid earum iure laboriosam nihil quidem! Delectus odit placeat
                                reprehenderit. Ab
                                commodi cumque, dicta modi officiis quo. Ab ad cupiditate distinctio dolores eveniet
                                illum,
                                ipsa
                                laudantium nemo neque praesentium quae, quibusdam rerum totam unde veritatis. Architecto
                                assumenda
                                blanditiis cupiditate delectus dolore ex facilis fugit impedit magni nemo neque nulla,
                                numquam odio
                                officiis omnis porro quas quibusdam quis quo quos rem, rerum temporibus. Beatae deserunt
                                eum
                                fugit
                                maxime molestias quisquam rem, repellendus rerum saepe ullam. Ad aperiam deserunt
                                distinctio
                                doloribus dolorum eius eos expedita fuga id laboriosam laborum maxime nam nemo nisi
                                optio
                                perspiciatis qui quod recusandae, sint unde? A accusamus adipisci assumenda commodi
                                dicta
                                dignissimos, ea earum eligendi expedita explicabo fuga inventore ipsa libero molestiae
                                molestias
                                natus, necessitatibus numquam officia omnis perspiciatis possimus provident
                                reprehenderit
                                sapiente
                                soluta unde velit veniam voluptates! At autem fugiat maxime perferendis rem? Assumenda
                                dicta
                                eos
                                exercitationem officiis quaerat quis ratione rerum vitae. Aliquid animi assumenda atque
                                aut
                                blanditiis consequatur deserunt doloremque est, explicabo illum ipsa iste iure laborum
                                minus
                                modi
                                nam nesciunt non perferendis quae quidem ut voluptas voluptatem? Adipisci commodi culpa
                                eligendi eos
                                explicabo hic in necessitatibus, numquam quis, quod ratione sint voluptate? Accusantium
                                atque
                                consequatur corporis culpa dicta, enim eum fugiat inventore laudantium maiores
                                perferendis
                                quisquam
                                repellendus saepe sapiente sint voluptatem voluptatibus? Ab adipisci aliquam at autem
                                consectetur
                                cumque distinctio eius iure laborum nihil obcaecati quo repellendus sit, sunt tempore
                                totam
                                veritatis voluptate! Illo ipsa minus nam necessitatibus nostrum quis tempore? Beatae
                                delectus dolor
                                eum molestias odit pariatur, repellendus similique suscipit ut voluptate? A asperiores
                                assumenda
                                dignissimos ex facilis fugit illo illum ipsa, iure neque perferendis quam, quia ratione
                                tempore
                                unde! A alias aperiam cupiditate delectus expedita facilis illum, incidunt ipsa iure
                                labore
                                laboriosam magnam maxime minus modi molestiae nam officia praesentium quam quas sequi
                                soluta
                                tenetur
                                voluptas, voluptatum! Amet aut cupiditate ea eius eum expedita facere fugit incidunt
                                modi
                                molestiae
                                nemo porro possimus quasi quis rem, repudiandae sapiente velit vero. Blanditiis corporis
                                doloremque
                                dolores fugit in itaque libero maiores maxime molestias necessitatibus odio pariatur
                                placeat
                                possimus repellat ut vero, voluptate! Consequuntur cum earum exercitationem laborum
                                laudantium
                                officia praesentium quae quas quisquam repellat saepe, sint suscipit, voluptas!
                                Consequatur
                                earum
                                facilis ipsam labore modi officia provident saepe tempora? A ab ad adipisci consequuntur
                                deserunt
                                eveniet explicabo impedit minus natus nulla, officiis optio perspiciatis possimus sequi
                                tempora
                                velit veniam? Distinctio dolorem inventore magni. At, consequatur, dolor doloribus
                                dolorum
                                ea enim
                                est expedita fugiat fugit hic incidunt labore magni necessitatibus neque obcaecati
                                officia
                                pariatur
                                quae, quos reiciendis rerum ullam veniam voluptates! Asperiores aspernatur consectetur
                                consequuntur
                                dignissimos, dolore dolores ea eum, incidunt iste iusto nesciunt omnis quia, quo ratione
                                voluptatum.
                                Accusantium, architecto commodi delectus fugiat illo ipsa iusto labore laborum, minima
                                perspiciatis
                                praesentium quasi quo quod reprehenderit repudiandae sequi temporibus vero voluptas!
                                Doloribus
                                facilis harum impedit libero odio qui quia. Aperiam cumque ex id, impedit libero nobis
                                odio
                                optio
                                placeat? Beatae debitis deleniti dicta dolore exercitationem, illum in natus perferendis
                                repellat
                                sapiente suscipit tenetur voluptatem voluptatibus? Assumenda beatae est qui repudiandae
                                veritatis.
                                Animi asperiores aspernatur commodi consectetur corporis ducimus, impedit inventore
                                ipsam
                                ipsum
                                itaque laboriosam laudantium magnam maiores minus neque nihil non numquam obcaecati odio
                                odit
                                pariatur perferendis praesentium quaerat quasi quis, quos ullam. Accusantium architecto
                                beatae culpa
                                deleniti dolorem dolores eaque et illo incidunt iste minima, natus nobis odit
                                perferendis
                                provident
                                quam tenetur vero voluptatum. A accusamus amet aperiam eaque, est harum nihil nobis odio
                                provident
                                quasi quis reiciendis rem sequi, totam voluptas! Distinctio esse illum laboriosam nemo
                                quas
                                quasi
                                rerum, ullam voluptate. Atque cum dolore ex, expedita explicabo fuga ipsum maiores
                                minima
                                modi nobis
                                perspiciatis porro, qui quis ratione sint suscipit tempore! Aliquam consequuntur
                                deleniti,
                                ea enim
                                error, est ex exercitationem fugiat maiores nostrum optio perspiciatis quasi quia rerum
                                sit
                                voluptate!
                            </Container>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Layout;