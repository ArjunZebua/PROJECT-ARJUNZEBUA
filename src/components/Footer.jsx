import { Facebook } from "lucide-react";
import { Twitter } from "lucide-react";
import { Instagram } from "lucide-react";
import { Pointer } from "lucide-react";

export default function Footer() {
    return (
        <footer className="footer">
            <section className="footer-about">
                {/* <h3></h3> */}
                <img
                    src="https://hypesneakerid.com/wp-content/uploads/2024/07/TAS-GEN-Z.jpg"
                    width="500px"
                    height="200px"
                    alt="Tas Gen Z"
                />
                <a
                    href="http://www.urbanicon.co.id/?gad_source=1&gclid=Cj0KCQiAgJa6BhCOARIsAMiL7V8wEQJtgEVPLPmpjAj8IQwgEa95LfTuVjaZIXpGdPTd1s3tniv4gTwaAg4HEALw_wcB"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <button className="explore-button"><Pointer />KLIK DISINI</button>
                </a>
            </section>
            <div className="footer-info">
                <h3 className="footer-title">Contact Us</h3>
                <p>
                    Telepon:{" "}
                    <a href="tel:+6283895216788" className="footer-link">
                        +62812 6279 4631
                    </a>
                </p>
                <p>Alamat: Jl.Cicendo No. 08, Bandung, Indonesia</p>
                <p>
                    Email:{" "}
                    <a href="mailto:Branded@gmail.com.id" className="footer-link">
                        BagInstyle.com
                    </a><br /><br />
                    Instagram: {""}
                    <a href="https://www.instagram.com/jun_s0304/" target="_blank" rel="noopener noreferrer" className="footer-link">
                    <Instagram /> Instagram
                    </a><br /><br />
                    Fcebook: {""}
                    <a href="https://www.facebook.com/NoobKu34" target="_blank" rel="noopener noreferrer" className="footer-link">
                    <Facebook />   Facebook
                    </a><br /><br />
                    Twiter: {""}
                    <a href="https://x.com/arjun_zebu42814" target="_blank" rel="noopener noreferrer" className="footer-link">
                    <Twitter />   Twiter
                    </a>


                </p>
            </div>
        </footer>
    );
}

        

