import React from 'react';
import SubFooter from '../components/SubFooter';
import './MenuPage.css'; // Importar el CSS 

const MenuPage = () => (
    <>
        <div className="container">
            <div className="bebidas-menu-list">
                <h1>Bebidas</h1>
                <hr size="2" width="100%" align="center" color="#8700ff" noshade />

                <h2>CERVEZAS</h2>

                <h3>NACIONALES</h3>
                <hr size="2" width="100%" align="center" color="#8700ff" noshade />
                <ul className="menu-list">
                    <li>Pilsener - $3.25</li>
                    <li>Suprema - $3.25</li>
                </ul>

                <h3>INTERNACIONALES</h3>
                <hr size="2" width="100%" align="center" color="#8700ff" noshade />
                <ul className="menu-list">
                    <li>Stella Artois - $3.95</li>
                    <li>Michelob Ultra - $3.95</li>
                    <li>Heineken - $3.95</li>
                    <li>Corona - $3.95</li>
                    <li>Quilmes - $3.95</li>
                    <li>Estrella Galicia 0.0% - $3.95</li>
                </ul>

                <h3>DRAFT ARTESANALES</h3>
                <hr size="2" width="100%" align="center" color="#8700ff" noshade />
                <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th>12oz</th>
                            <th>Litre</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>La Do�a (Golden Ale)</td>
                            <td>$5.75</td>
                            <td>$12.95</td>
                        </tr>
                        <tr>
                            <td>IPA (6.5%)</td>
                            <td>$5.75</td>
                            <td>$12.95</td>
                        </tr>
                        <tr>
                            <td>Premium Lager (5.0%)</td>
                            <td>$5.75</td>
                            <td>$12.95</td>
                        </tr>
                        <tr>
                            <td>Red Ale (5.0%)</td>
                            <td>$5.75</td>
                            <td>$12.95</td>
                        </tr>
                        <tr>
                            <td>Flight (4 Unidades)</td>
                            <td>$14.94</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>

                <h2>SIGNATURE COCKTAILS - $9.95</h2>
                <hr size="2" width="100%" align="center" color="#8700ff" noshade />
                <ul className="menu-list">
                    <li><strong>SAUCO BREEZE</strong><span><br />Saint Germain y Licor de Melón, Prosecco, Blueberries y Rocío de Cardamomo - Fruity n' Sparkling.</span></li>
                    <li><strong>DO�A CONSUELO</strong><span><br /> Ginebra y Saint Germain, con Agua de Pepino fresca y Sour Mix para balancear - Refreshing.</span></li>
                </ul>

                <h3>DIALBICO</h3>
                <ul className="menu-list">
                    <li>Mezcal con Homemade Syrup de Tamarinda, Licor de Chile Ancho y doble filtrado - Sweet n' Spicy</li>
                </ul>

                <h3>MAUI</h3>
                <ul className="menu-list">
                    <li>Ron Oscuro con Pi�a fresca y Sirope de Jengibre, finalizando con gotas de Angostura - Fruity</li>
                </ul>

                <h2>COCKTAILS - $7.95</h2>

                <table>
                    <thead>
                        <tr>
                            <th>VODKA</th>
                            <th>WHISKY</th>
                            <th>TEQUILA</th>
                            <th>WINE N' BUBBLES</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Moscow Mule</td>
                            <td>Manhattan</td>
                            <td>Margarita</td>
                            <td>Sangr�a</td>
                        </tr>
                        <tr>
                            <td>Vodka Martini</td>
                            <td>Boulevardier</td>
                            <td>Muleta</td>
                            <td>Tinto de Verano</td>
                        </tr>
                        <tr>
                            <td>Bloody Mary</td>
                            <td>Whisky Sour</td>
                            <td>Paloma</td>
                            <td>Bellini</td>
                        </tr>
                        <tr>
                            <td>Cosmopolitan</td>
                            <td>Old Fashioned</td>
                            <td>Tequila Sunrise</td>
                            <td>Mimosa</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>Aperol Spritz</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>Midori Spritz</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>Saint Germain Spritz</td>
                        </tr>
                    </tbody>
                </table>

                <table>
                    <thead>
                        <tr>
                            <th>GIN</th>
                            <th>RON</th>
                            <th>LIQUEUR</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Gin Tonic</td>
                            <td>Mojito</td>
                            <td>Caipirinha</td>
                        </tr>
                        <tr>
                            <td>Tom Collins</td>
                            <td>Daiquiri</td>
                            <td>Carajillo</td>
                        </tr>
                        <tr>
                            <td>Negroni</td>
                            <td>Perfect Serve</td>
                            <td>Pisco Sour</td>
                        </tr>
                        <tr>
                            <td>Dry Martini</td>
                            <td>Caipirissima</td>
                            <td>Amaretto Sour</td>
                        </tr>
                        <tr>
                            <td>Dirty Martini</td>
                            <td>Pi�a Colada</td>
                            <td>Long Island Ice Tea</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>Martini (Espresso, Apple)</td>
                        </tr>
                    </tbody>
                </table>

                <h2>MOCKTAILS - $4.95</h2>

                <hr size="2" width="100%" align="center" color="#8700ff" noshade />
                
            </div>
            <div className="platos-menu-list">
                <h1>platos</h1>
                <hr size="2" width="100%" align="center" color="#8700ff" noshade />

                <h2>CARPACCIO DE RES</h2>
                <p>Finos cortes de lomo de aguja, shaves de queso manchego, alioli de mostaza Dijon, alcaparras, hojas de ar�gula, chips de ajo y palitos de pan.</p>
                <p>$14.95</p>

                <h2>CARPACCIO DE SALM�N</h2>
                <p>Finos cortes de salm�n chileno, shaves de queso parmesano Grana Padano, vinagreta oriental de ponzu y miel, manzana verde, crocante de cebolla, ajonjol� de dos colores, brotes de girasol y chips de malanga.</p>
                <p>$15.95</p>

                <h2>CARPACCIO DE ZUCCHINI</h2>
                <p>Asado a la parrilla, shaves de queso pecorino, vinagreta c�trica perfumada con albahaca, almendras tostadas en lascas, hojas de perejil con miel trufada, crema de bals�mico y palitos de pan.</p>
                <p>$11.95</p>

                <h1>Ceviche Peruano de Camar�n</h1>
                <p>Leche de tigre de aj� limo, aguacate, crocante de cebolla y chips de malanga.</p>
                <p>$15.95</p>

                <h1>Ceviche al Olivo de Pescado</h1>
                <p>Leche de tigre vegetal, aceitunas Kalamata, chile rojo, chile verde, cilantro, aceite de oliva y tajadas de pl�tano verde.</p>
                <p>$12.95</p>

                <button>Extra de aguacate $2.95</button>

                <h1>DE NUESTRA PARRILLA</h1>
                <hr size="2" width="100%" align="center" color="#8700ff" noshade />
                <h2>ASADO T�PICO DE PUYAZO COULOTTE</h2>
                <p>Servido con frijoles refritos, guacamole, chorizo argentino, pl�tanos fritos y queso.</p>
                <p>$26.95</p>

                <h2>PECHUGA DE POLLO A LA PARRILLA</h2>
                <p>$16.95</p>

                <h2>MIXTO DE 16oz (LOMO DE AGUJA Y PUYAZO)</h2>
                <p>$28.95</p>

                <h2>CAMARONES JUMBO</h2>
                <p>Al ajillo o a la parrilla.</p>
                <p>$33.95</p>

                <h2>PESCA DEL D�A 8oz</h2>
                <p>Al ajillo o a la parrilla.</p>
                <p>$22.95</p>

                <h2>MAR Y TIERRA CON LOMO DE AGUJA</h2>
                <p>Elige entre nuestro corte La Do�a o trozo entero (15 minutos de espera).</p>
                <p>$32.95</p>

                <h1>INFANTILES</h1>
                <hr size="2" width="100%" align="center" color="#8700ff" noshade />
                <h2>INFANTIL DE LOMITO</h2>
                <p>4 onzas de lomo de aguja a la parrilla acompa�ado de papas gajo fritas.</p>
                <p>$9.95</p>

                <h2>INFANTIL DE POLLO</h2>
                <p>4 onzas de pechuga de pollo a la parrilla acompa�ado de papas gajo fritas.</p>
                <p>$8.95</p>

                <p>Incluyen una bola de helado de cookies and cream.</p>

                <h1>GUARNICIONES</h1>
                <hr size="2" width="100%" align="center" color="#8700ff" noshade />
                <h2>ARROZ VERDE</h2>
                <p>Hecho con espinaca y cilantro, terminado con semillas de calabaza tostadas.</p>
                <p>$4.95</p>

                <h2>ELOTE AMARILLO</h2>
                <p>Terminado a la parrilla con mantequilla clarificada.</p>
                <p>$4.95</p>

                <h2>VEGETALES ASADOS</h2>
                <p>Berenjena, zanahoria, chile pimiento y zucchini.</p>
                <p>$4.95</p>

                <h2>FRIJOLES REFRITOS</h2>
                <p>Terminados con un chip de malanga.</p>
                <p>$4.95</p>

                <h2>GUACAMOL</h2>
                <p>Aceite de oliva, jugo de lim�n y cebolla morada.</p>
                <p>$4.95</p>

                <h2>PAPAS GAJO</h2>
                <p>Fritas y rebozadas en nuestro mix secreto de La Do�a.</p>
                <p>$4.95</p>

                <h2>PAPAS DAUPHINOISE</h2>
                <p>Hechas con nuestra crema de ajo rostizado y queso parmesano Grana Padano.</p>
                <p>$4.95</p>

                <h1>EXTRAS</h1>
                <hr size="2" width="100%" align="center" color="#8700ff" noshade />
                <h2>TORTILLAS (3)</h2>
                <p>$1.95</p>

                <h2>PAN CON AJO</h2>
                <p>$1.95</p>

                <h2>PAN CON MANTEQUILLA</h2>
                <p>$1.95</p>

                <h2>SALSA CREMOSA DE HONGOS</h2>
                <p>$4.95</p>

                <h2>CHIPS DE MALANGA</h2>
                <p>$2.25</p>

                <h2>PALITOS DE PAN</h2>
                <p>$2.25</p>

                <h2>TAJADA DE PLATANO VERDE</h2>
                <p>$2.25</p>

                <h2>CREMA DE JALAPE�O CON AJO ROSTIZADO</h2>
                <p>$4.95</p>

                <h2>QUESO ASADO</h2>
                <p>$4.95</p>

                <h1>CARTA DE VINOS</h1>
                <hr size="2" width="100%" align="center" color="#8700ff" noshade />
                <hr size="2" width="100%" align="center" color="#8700ff" noshade />
                <h2>VINOS POR COPA TINTOS</h2>
                <ul>
                    <li>La Linda Malbec - $6.95</li>
                    <li>Tarapac� Cabernet Sauvignon - $4.95</li>
                    <li>Marqu�s del Riscal Tempranillo - $5.95</li>
                </ul>

                <h2>VINOS POR COPA BLANCOS</h2>
                <ul>
                    <li>Trapiche Reserva Chardonnay - $5.95</li>
                    <li>Torres Vi�a Esmeralda - $5.95</li>
                </ul>

                <h2>VINOS TINTOS POR BOTELLA</h2>

                <h3>ARGENTINA</h3>
                <ul>
                    <li>Luigi Bosca (Malbec) - $44.95</li>
                    <li>Antigal Uno (Malbec) - $44.95</li>
                    <li>Luigi Bosca de Sangre - $64.95</li>
                    <li>La Linda (Malbec) - $34.95</li>
                    <li>Catena (Malbec) - $49.95</li>
                    <li>Salentein Kilka Corte de Tintas - $44.95</li>
                </ul>

                <h1>ESTADOS UNIDOS</h1>
                <ul>
                    <li>Conundrum Red - $59.95</li>
                    <li>Chateau Ste Michelle (Merlot) - $49.95</li>
                    <li>Bonanza California (Cabernet Sauvignon) - $59.95</li>
                    <li>Caymus (Cabernet Sauvignon) - $174.95</li>
                    <li>Sea Sun (Pinot Noir) - $59.95</li>
                    <li>Red Schooner (Malbec) - $109.95</li>
                    <li>Belle Glos Las Alturas (Pinot Noir) - $119.95</li>
                    <li>The Prisoner Unshackled (Cabernet Sauvignon) - $59.95</li>
                    <li>Saldo Zinfandel - $69.95</li>
                    <li>Erath (Pinot Noir) - $64.95</li>
                    <li>Secrets Red Blend - $32.95</li>
                    <li>Robert Mondavi (Cabernet Sauvignon) - $79.95</li>
                    <li>Bogle Essential Red - $44.95</li>
                </ul>

                <h1>VINOS BLANCOS POR BOTELLA</h1>

                <h3>ARGENTINA</h3>
                <ul>
                    <li>Zucardi Serie A (Chardonnay Viogner) - $49.95</li>
                </ul>

                <h1>ROSADOS</h1>
                <ul>
                    <li>La Linda (Malbec Rose) - $34.95</li>
                    <li>Hacienda Lopez de Haro Rose - $29.95</li>
                    <li>Beringer White Zinfandel - $24.95</li>
                    <li>Montes Cherub Rose (Syrah) - $39.95</li>
                    <li>Studio by Miraval Rose Cotes de Provence - $49.95</li>
                </ul>

                <h1>ESPUMANTES</h1>
                <ul>
                    <li>Prosecco Piccini Venetian - $34.95</li>
                    <li>Bottega White Gold - $59.95</li>
                    <li>Bottega Gold - $59.95</li>
                    <li>Bottega Gold Magnum - $99.95</li>
                    <li>Freixenet Prosecco - $39.95</li>
                    <li>Cava Ana Codorniu Blanc de Blancs - $44.95</li>
                    <li>Taittinger Brut - $99.95</li>
                </ul>

            </div>
        </div>
        <SubFooter height={400} />
        <SubFooter height={100} />
    </>
);

export default MenuPage;