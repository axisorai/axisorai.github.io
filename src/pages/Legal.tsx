import { useEffect } from "react";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

const Legal = () => {
    useEffect(() => {
        document.title = "Hukuki Bilgilendirme | Axisorai";
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute("content", "Axisorai hukuki bilgilendirme metni, site kullanım amacı, içerik niteliği ve fiyat bilgilerinin açıklayıcı hukuki çerçevesi.");
        }
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-background relative overflow-hidden flex flex-col">
            {/* Background glow effects */}
            <div className="fixed inset-0 pointer-events-none z-[1]">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-glow-pulse" />
                <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-[100px] animate-glow-pulse" style={{ animationDelay: '2s' }} />
            </div>

            {/* Subtle grid overlay */}
            <div className="fixed inset-0 subtle-grid opacity-20 pointer-events-none z-[1]" />

            <Navbar />

            <main className="relative z-10 flex-grow pt-32 pb-24 px-4 md:px-6">
                <div className="container mx-auto max-w-4xl">
                    
                    {/* Header */}
                    <div className="mb-12 animate-fade-in text-center md:text-left border-b border-border/50 pb-8">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 rounded-full bg-primary/10 border border-primary/20">
                            <span className="text-xs text-primary font-medium tracking-wider uppercase">Yasal Çerçeve</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4 tracking-tight drop-shadow-lg">
                            Hukuki Bilgilendirme
                        </h1>
                        <p className="text-lg text-muted-foreground font-medium">
                            Sitenin niteliği, kullanım amacı ve değerlendirme çerçevesi.
                        </p>
                    </div>

                    {/* Content Body */}
                    <div className="glass-card p-6 md:p-10 lg:p-12 animate-fade-in space-y-12 text-muted-foreground text-sm md:text-base leading-relaxed text-justify" style={{ animationDelay: '0.1s' }}>
                        
                        <section className="space-y-4">
                            <h2 className="text-xl md:text-2xl font-bold text-foreground tracking-tight pb-2 border-b border-border/30">1. Sitenin Niteliği ve Kullanım Amacı</h2>
                            <p>
                                Bu internet sitesi, genel kamuya açık bir e-ticaret platformu, çevrimiçi sipariş sistemi veya doğrudan ticari işlem altyapısı olarak değil; tanıtım, genel bilgilendirme, ön değerlendirme ve iletişim kurulmasına yardımcı olma amacıyla hazırlanmış bir dijital bilgilendirme alanı niteliğindedir.
                            </p>
                            <p>
                                Bu sitede yer alan tüm açıklamalar, hizmet başlıkları, örnek kullanım alanları, tanıtım metinleri, referans bilgiler, içerik özetleri, fiyat göstergeleri, karşılaştırmalı açıklamalar, örnek senaryolar ve benzeri tüm unsurlar yalnızca genel bilgi verme amacı taşır. Sitede bulunan hiçbir içerik tek başına bağlayıcı teklif, kesin kabul, otomatik onay, doğrudan işlem çağrısı, hukuken kesinleşmiş hizmet ilişkisi veya talep edilebilir bir edim yükümlülüğü doğurmaz.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-xl md:text-2xl font-bold text-foreground tracking-tight pb-2 border-b border-border/30">2. Bağlayıcılık ve Kabul Oluşturmama</h2>
                            <p>
                                Bu internet sitesi üzerinden kendiliğinden kesinleşen bir hukuki ilişki kurulmaz. Site içeriğinde yer alan hiçbir ifade, ziyaretçi veya kullanıcı bakımından doğrudan bir sipariş, bağlayıcı talep, otomatik kabul, çevrimiçi sözleşme kurulması, ifa yükümlülüğü ya da belirli bir içerik veya çalışma sonucunun sağlanacağı yönünde yorumlanamaz.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-xl md:text-2xl font-bold text-foreground tracking-tight pb-2 border-b border-border/30">3. İçeriklerin ve Fiyat Bilgilerinin Hukuki Niteliği</h2>
                            <p>
                                Sitede belirtilen fiyatlar, ücret aralıkları, bedel örnekleri, karşılaştırmalı maliyet bilgileri ve benzeri sayısal veriler; yalnızca güncel yapay zeka çözümleri, araçları, modelleri, teknolojik imkanları ve bunlara ilişkin genel piyasa/bilgi çerçevesi hakkında ön bilgilendirme sağlamak amacıyla paylaşılmaktadır. Bu bilgiler bağlayıcı fiyat teklifi niteliğinde değildir.
                            </p>
                            <p>
                                Bu sitede yer alan herhangi bir fiyat bilgisi; doğrudan talep edilebilir, kendiliğinden uygulanabilir, otomatik olarak geçerli hale gelen veya herkes bakımından aynı koşullarla geçerli sayılabilecek kesin bir bedel olarak yorumlanamaz. Sitede kullanılan fiyat ve içerik bilgileri; yalnızca bilgi amaçlı, örnekleyici, açıklayıcı ve yönlendirici mahiyettedir. Bunlar herhangi bir kişi veya durum bakımından standartlaştırılmış, kesinleşmiş, değişmez ya da herkese aynı şekilde uygulanacak koşullar anlamına gelmez. Her konu, her ihtiyaç, her teknik gereklilik ve her değerlendirme kendi koşulları içinde ayrıca ele alınabilir.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-xl md:text-2xl font-bold text-foreground tracking-tight pb-2 border-b border-border/30">4. Hizmet Kapsamı ve Değerlendirme Süreci</h2>
                            <p>
                                Bu internet sitesinde yer alan bilgiler, herhangi bir kişi bakımından belirli bir çalışmanın mutlaka üstlenileceği, belirli bir hizmetin mutlaka sağlanacağı, belirli bir sürede geri dönüş yapılacağı, belirli bir çıktının üretileceği veya belirli bir sonucun garanti edileceği anlamına gelmez. Sitede yer alan içerikler yalnızca genel açıklama niteliği taşır; bunlar herhangi bir kişi lehine otomatik hak, beklenti veya talep oluşturmaz.
                            </p>
                            <p>
                                Sitede yer alan hiçbir açıklama, içerik veya referans bilgi; aksi açık ve yazılı şekilde ayrıca kararlaştırılmadıkça, tek başına bağlayıcı bir işlem temeli olarak kabul edilmemelidir.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-xl md:text-2xl font-bold text-foreground tracking-tight pb-2 border-b border-border/30">5. Sonuç ve Süreklilik Taahhüdü Bulunmaması</h2>
                            <p>
                                Bu site, yalnızca bilgilendirme ve tanıtım amacıyla yapılandırılmıştır. Ziyaretçilerin site içeriğinden edineceği kanaat, değerlendirme ve yorumlar kendi kişisel anlayış ve kullanım biçimlerine bağlıdır. Site içeriğinde yer alan hiçbir açıklama; belirli bir hukuki, teknik, mesleki, ticari veya operasyonel sonucun mutlak surette doğacağı yönünde taahhüt olarak kabul edilemez.
                            </p>
                            <p>
                                Sitede bulunan hiçbir ifade; sınırsız erişim, kesintisiz kullanılabilirlik, mutlak doğruluk, eksiksizlik, her koşulda uygunluk veya beklentiye tam uyum yönünde garanti anlamı taşımaz. Bu internet sitesinin yapısı, içeriği ve sunumu zaman içinde değişebilir.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-xl md:text-2xl font-bold text-foreground tracking-tight pb-2 border-b border-border/30">6. İçerik Güncellemeleri ve Değişiklik Hakkı</h2>
                            <p>
                                Sitede yer alan bilgiler, açıklamalar ve referans içerikler zaman içinde güncellenebilir, değiştirilebilir, düzeltilip yeniden yayımlanabilir, kısmen veya tamamen kaldırılabilir. İçeriklerin belirli bir süre boyunca aynı şekilde kalacağı veya her zaman güncel tutulacağı yönünde açık ya da örtülü bir taahhüt verilmemektedir. Bu nedenle ziyaretçiler, site içeriğinde yer alan bilgilerin mutlak kesinlik taşıdığı varsayımıyla hareket etmemelidir.
                            </p>
                            <p>
                                Site içeriğinde yer alan açıklamaların kapsamı, dili, teknik çerçevesi, örnekleri ve içerik kurgusu; bilgilendirme ihtiyacına göre zaman zaman farklılaştırılabilir. Bu durum, mevcut veya önceki içeriklerin herhangi bir kişi bakımından bağlayıcı hale geldiği şeklinde yorumlanamaz.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-xl md:text-2xl font-bold text-foreground tracking-tight pb-2 border-b border-border/30">7. Fikri Mülkiyet ve İçerik Kullanımı</h2>
                            <p>
                                Bu internet sitesinde yer alan metinler, tasarımlar, görseller, başlıklar, açıklama yapıları, marka unsurları, ayırt edici işaretler, özgün kurgu unsurları ve diğer içerikler ilgili fikri ve sınai hak korumalarına tabi olabilir. Açık yazılı izin olmaksızın bunların kısmen veya tamamen kopyalanması, çoğaltılması, başka mecralarda kullanılması, değiştirilmesi, ticari ya da yanıltıcı şekilde sunulması uygun değildir.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-xl md:text-2xl font-bold text-foreground tracking-tight pb-2 border-b border-border/30">8. Sorumluluk Sınırlandırmasına İlişkin Açıklama</h2>
                            <p>
                                Bu sitede yer alan bilgiler, genel nitelikte olup her somut olay, ihtiyaç, kişi, kurum, teknik gereklilik veya kullanım amacı bakımından birebir uygunluk taşıyacağı şeklinde yorumlanmamalıdır. Ziyaretçinin kendi koşullarına uygunluk değerlendirmesini ayrıca yapması gerekir. Sitede yer alan açıklamaların belirli bir kullanım biçimine göre farklı sonuçlar doğurması mümkündür.
                            </p>
                            <p>
                                İşbu sayfadaki tüm açıklamalar; yalnızca sitenin kullanım çerçevesinin, bilgilendirme niteliğinin ve içeriklerin hukuki mahiyetinin anlaşılmasına yardımcı olmak amacıyla sunulmaktadır. Bu metin, emredici mevzuat hükümlerini ortadan kaldırmaz; uygulanması zorunlu yasal düzenlemeler saklıdır.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-xl md:text-2xl font-bold text-foreground tracking-tight pb-2 border-b border-border/30">9. Kullanıcı Sorumluluğu ve Girilen İçerikler</h2>
                            <p>
                                Site ve/veya hizmetler aracılığıyla kullanıcılar tarafından girilen, iletilen, paylaşılan veya üretilen her türlü metin, veri, bilgi, mesaj, komut (prompt) ve benzeri içeriklerden münhasıran ilgili kullanıcı sorumludur. Kullanıcıların yapay zeka araçları üzerinden oluşturdukları veya ilettikleri içerikler, yalnızca o kullanıcının kişisel tercih ve sorumluluğu dahilindedir.
                            </p>
                            <p>
                                Site yönetimi; kullanıcıların girdiği, paylaştığı veya yapay zeka araçlarına ilettiği bilgilerin doğruluğundan, hukuka uygunluğundan, üçüncü kişilerin haklarını ihlal edip etmediğinden veya bu içeriklerin herhangi bir şekilde kullanılmasından doğabilecek sonuçlardan sorumlu tutulamaz. Kullanıcı, platform üzerinden gerçekleştirdiği tüm işlemlerin ve ilettiği tüm içeriklerin sorumluluğunun kendisine ait olduğunu kabul eder.
                            </p>
                            <p>
                                Kullanıcılar; kişisel verilerin korunması mevzuatı, fikri mülkiyet hakları, kişilik hakları ve ilgili diğer yasal düzenlemeler kapsamında, üçüncü kişilere ait bilgileri izinsiz paylaşmamakla ve hukuka aykırı içerik oluşturmamakla yükümlüdür.
                            </p>
                        </section>

                        <div className="mt-16 pt-8 border-t border-border/50 text-center">
                            <p className="inline-flex items-center justify-center font-bold px-6 py-3 bg-secondary/30 rounded-xl text-primary border border-primary/20 shadow-inner">
                                Emredici mevzuattan doğan ve uygulanması zorunlu olan hükümler saklıdır.
                            </p>
                        </div>
                    </div>
                </div>
            </main>

            <div id="footer" className="mt-auto">
                <Footer />
            </div>
        </div>
    );
};

export default Legal;
