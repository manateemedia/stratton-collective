# DNS records before the move (Nov 11, 2026)

Nameservers: Google Domains / Squarespace Domains (ns-cloud-b1..b4.googledomains.com). Keep these.

## Email (DO NOT CHANGE)
MX 1  aspmx.l.google.com
MX 5  alt1.aspmx.l.google.com
MX 5  alt2.aspmx.l.google.com
MX 10 alt3.aspmx.l.google.com
MX 10 alt4.aspmx.l.google.com
TXT  v=spf1 include:_spf.wpcloud.com include:_spf.google.com ~all
TXT  google-site-verification=LwgwZI5gfV4BNrFP98MPs1J5fc9nQ_FaHT6qcDShVMY
TXT  google-site-verification=Aq9LiTOa3_1oC3BrVr7TELiJIA8JqAUQebDG9UlLX7A

## Website (these are the only records that change)
Old (Squarespace):
  @   A     198.49.23.144, 198.49.23.145, 198.185.159.144, 198.185.159.145
  www CNAME ext-sq.squarespace.com
New (Vercel):
  @   A     76.76.21.21   (confirm against the value Vercel shows)
  www CNAME cname.vercel-dns.com

To roll back, put the old website records back. Email is unaffected either way.
