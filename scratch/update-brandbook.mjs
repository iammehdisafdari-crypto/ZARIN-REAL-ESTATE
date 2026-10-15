import fs from 'fs';

let content = fs.readFileSync('brandbook.html', 'utf8');

const target = `            <span class="px-2 py-1 bg-gold-soft border border-gold-line rounded-xs text-[10px] text-gold-400">CNY</span>
          </div>
        </div>

      </div>

    </div>
  </section>`;

const replacement = `            <span class="px-2 py-1 bg-gold-soft border border-gold-line rounded-xs text-[10px] text-gold-400">CNY</span>
          </div>
        </div>

      </div>

      <!-- کامپوننت آیتم‌های تماس در CTA (معماری دو زبانه RTL و LTR) -->
      <div class="mt-16 pt-12 border-t border-white-line">
        <h3 class="text-2xl font-bold text-bone mb-4">آیتم‌های اطلاعات تماس در CTA (قانون چیدمان RTL / LTR)</h3>
        <p class="text-sm text-ash leading-relaxed max-w-3xl mb-8">
          در تمامی بخش‌های تماس و CTAهای سایت، کارت اطلاعات تماس بر اساس کامپوننت مشترک <code class="text-gold-400 bg-ink-950 px-2 py-0.5 rounded-xs">.cta-contact-card</code> پیاده‌سازی می‌شود.
          در حالت فارسی (RTL)، آیکون همواره در <strong>سمت راست</strong> (شروع خط محور افقی) قرار می‌گیرد و عنوان و شماره تماس هر دو به سمت آیکون <strong>راست‌چین</strong> می‌شوند؛ شماره تلفن و ایمیل با ویژگی <code class="text-gold-400 bg-ink-950 px-2 py-0.5 rounded-xs">dir="ltr"</code> و کلاس <code class="text-gold-400 bg-ink-950 px-2 py-0.5 rounded-xs">.cta-contact-value</code> خوانایی لاتین خود را حفظ می‌کنند. هرگز نباید کل تگ <code class="text-gold-400 bg-ink-950 px-2 py-0.5 rounded-xs">&lt;a&gt;</code> به LTR تغییر جهت داده شود.
        </p>

        <div class="grid md:grid-cols-2 gap-8">
          <!-- نمونه زنده RTL -->
          <div class="bg-ink-800 border border-gold-line rounded-sm p-6 text-right">
            <div class="text-xs uppercase tracking-wider text-gold-400 font-semibold mb-4">نمونه نسخه فارسی (RTL) — تراز راست آینه‌ای</div>
            <div class="space-y-4">
              <a href="tel:+971586901231" class="cta-contact-card flex items-center gap-4 group cursor-default">
                <div class="flex-shrink-0 w-12 h-12 border border-gold-line rounded-xs flex items-center justify-center bg-gold-soft transition-colors">
                  <svg class="w-5 h-5 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.288a11.3 11.3 0 005.067 5.067l1.288-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                </div>
                <div class="cta-contact-text text-right">
                  <div class="text-sm font-bold text-bone">تلفن مستقیم دفتر دبی</div>
                  <span dir="ltr" class="cta-contact-value text-sm text-gold-400 inline-block tabular-nums">+971 58 690 1231</span>
                </div>
              </a>
              <a href="https://wa.me/971586901231" class="cta-contact-card flex items-center gap-4 group cursor-default">
                <div class="flex-shrink-0 w-12 h-12 border border-gold-line rounded-xs flex items-center justify-center bg-gold-soft transition-colors">
                  <svg class="w-5 h-5 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                </div>
                <div class="cta-contact-text text-right">
                  <div class="text-sm font-bold text-bone">ارتباط در واتس‌اپ</div>
                  <span class="text-sm text-gold-400">ارسال پیام مستقیم به مشاور</span>
                </div>
              </a>
            </div>
          </div>

          <!-- نمونه زنده LTR -->
          <div class="bg-ink-800 border border-white-line rounded-sm p-6 text-left" dir="ltr">
            <div class="text-xs uppercase tracking-wider text-ash font-semibold mb-4">English Reference (LTR) — Natural Left Alignment</div>
            <div class="space-y-4">
              <a href="tel:+971586901231" class="cta-contact-card flex items-center gap-4 group cursor-default">
                <div class="flex-shrink-0 w-12 h-12 border border-gold-line rounded-xs flex items-center justify-center bg-gold-soft transition-colors">
                  <svg class="w-5 h-5 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.288a11.3 11.3 0 005.067 5.067l1.288-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                </div>
                <div>
                  <div class="text-sm font-bold text-bone">Direct Phone</div>
                  <span class="text-sm text-gold-400 inline-block tabular-nums">+971 58 690 1231</span>
                </div>
              </a>
              <a href="https://wa.me/971586901231" class="cta-contact-card flex items-center gap-4 group cursor-default">
                <div class="flex-shrink-0 w-12 h-12 border border-gold-line rounded-xs flex items-center justify-center bg-gold-soft transition-colors">
                  <svg class="w-5 h-5 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                </div>
                <div>
                  <div class="text-sm font-bold text-bone">WhatsApp</div>
                  <span class="text-sm text-gold-400">Message us directly</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>`;

// Normalize CRLF to LF for matching
const normContent = content.replace(/\r\n/g, '\n');
const normTarget = target.replace(/\r\n/g, '\n');

if (normContent.includes(normTarget)) {
  const updated = normContent.replace(normTarget, replacement.replace(/\r\n/g, '\n'));
  fs.writeFileSync('brandbook.html', updated, 'utf8');
  console.log('✅ Successfully updated brandbook.html with CTA Contact Card specification!');
} else {
  console.log('❌ Target not found in brandbook.html');
}
