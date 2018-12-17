require 'open-uri'

User.destroy_all
Song.destroy_all

u1 = User.create(username: 'demo', password: 'demo123')
u2 = User.create(username: 'julian', password: 'password')
u3 = User.create(username: 'Dillon Francis', password: 'password')
u4 = User.create(username: 'Run the Jewels', password: 'password')
u5 = User.create(username: 'Yeah Yeah Yeahs', password: 'password')
u6 = User.create(username: 'Arctic Monkeys', password: 'password')
u7 = User.create(username: 'Major Lazer', password: 'password')
u8 = User.create(username: 'Justice', password: 'password')
u9 = User.create(username: 'DJ Shadow', password: 'password')
u10 = User.create(username: 'Justin Timberlake', password: 'password')
u11 = User.create(username: 'Grateful Dead', password: 'password')
u12 = User.create(username: 'Miles Davis', password: 'password')

s3 = Song.new(
    user_id: u3.id, 
    title: "Not Butter", 
    genre: "Electronic", 
    description: "Today is one of the greatest days of my life!! I woke up this morning to see that the album is #1 on Dance and #5 overall!!! This album has been a labor of love that I got to work on with a lot of amazing friends. I’m so happy I finally get to share all the songs with you! Thanks for sticking with me and being my friends. I hope this album brings you happiness and good times because that’s all I ever want for everyone. Thank you for all your support!!! BTW THIS IS MY MOMS FAV SONG OFF MY ALBUM AND IM GLAD IT IS CAUSE ITS ONE OF THE SONGS I HAD THE MOST FUN MAKING ESPECIALLY THE LYRICS :)"
    )
s3_image = open('https://s3-us-west-1.amazonaws.com/towndcloud-seed/3.png')
s3_audio = open('https://s3-us-west-1.amazonaws.com/towndcloud-seed/3.mp3')
s3.image.attach(io: s3_image, filename: '3.png')
s3.audio.attach(io: s3_audio, filename: '3.mp3')
s3.save!

s4 = Song.new(
user_id: u4.id, 
title: "Let's Go (The Royal We)", 
genre: "Hip Hop", 
description: "Released by: Run The Jewels, Inc. Release date: 11 October 2018"
)
s4_image = open('https://s3-us-west-1.amazonaws.com/towndcloud-seed/4.png')
s4_audio = open('https://s3-us-west-1.amazonaws.com/towndcloud-seed/4.mp3')
s4.image.attach(io: s4_image, filename: '4.png')
s4.audio.attach(io: s4_audio, filename: '4.mp3')
s4.save!

s5 = Song.new(
user_id: u5.id, 
title: "Heads Will Roll (A Trak remix)",
genre: "Electronic",
description: "Release date: 1 January 2010 P-line: ℗ 2009 ℗ 2009 Yeah Yeah Yeahs, under exclusive license to DGC Records"
)
s5_image = open('https://s3-us-west-1.amazonaws.com/towndcloud-seed/5.png')
s5_audio = open('https://s3-us-west-1.amazonaws.com/towndcloud-seed/5.mp3')
s5.image.attach(io: s5_image, filename: '5.png')
s5.audio.attach(io: s5_audio, filename: '5.mp3')
s5.save!

s6 = Song.new(
user_id: u6.id, 
title: "Do I Wanna Know?",
genre: "Rock",
description: "Arctic Monkeys - 'Do I Wanna Know?' from 'AM', released 2013 on Domino Recording Co. Subscribe to Arctic Monkeys on YouTube: http://bit.ly/ArcticMonkeysYT"
)
s6_image = open('https://s3-us-west-1.amazonaws.com/towndcloud-seed/6.png')
s6_audio = open('https://s3-us-west-1.amazonaws.com/towndcloud-seed/6.mp3')
s6.image.attach(io: s6_image, filename: '6.png')
s6.audio.attach(io: s6_audio, filename: '6.mp3')
s6.save!

s7 = Song.new(
user_id: u7.id, 
title: "Get Free (feat. Amber of Dirty Projectors)",
genre: "Electronic",
description: "Free Download: www.majorlazergetfree.com/"
)
s7_image = open('https://s3-us-west-1.amazonaws.com/towndcloud-seed/7.png')
s7_audio = open('https://s3-us-west-1.amazonaws.com/towndcloud-seed/7.mp3')
s7.image.attach(io: s7_image, filename: '7.png')
s7.audio.attach(io: s7_audio, filename: '7.mp3')
s7.save!

s8 = Song.new(
user_id: u8.id, 
title: "We Are Your Friends",
genre: "Electronic"
)
s8_image = open('https://s3-us-west-1.amazonaws.com/towndcloud-seed/8.png')
s8_audio = open('https://s3-us-west-1.amazonaws.com/towndcloud-seed/8.mp3')
s8.image.attach(io: s8_image, filename: '8.png')
s8.audio.attach(io: s8_audio, filename: '8.mp3')
s8.save!

s9 = Song.new(
user_id: u9.id, 
title: "Six Days (feat Mos Def)",
genre: "Hip Hop",
description: "Release date: 1 January 2002 P-line: ℗ 2002 ℗ 2002 A&M Records Ltd., under exclusive license to Universal Island Records Ltd"
)
s9_image = open('https://s3-us-west-1.amazonaws.com/towndcloud-seed/9.png')
s9_audio = open('https://s3-us-west-1.amazonaws.com/towndcloud-seed/9.mp3')
s9.image.attach(io: s9_image, filename: '9.png')
s9.audio.attach(io: s9_audio, filename: '9.mp3')
s9.save!

s10 = Song.new(
user_id: u10.id, 
title: "Filthy",
genre: "Julianwave",
description: "Hater's gonna say it's fake."
)
s10_image = open('https://s3-us-west-1.amazonaws.com/towndcloud-seed/10.png')
s10_audio = open('https://s3-us-west-1.amazonaws.com/towndcloud-seed/10.mp3')
s10.image.attach(io: s10_image, filename: '10.png')
s10.audio.attach(io: s10_audio, filename: '10.mp3')
s10.save!

s11 = Song.new(
user_id: u11.id, 
title: "Box of Rain",
genre: "Rock",
description: "A song by the Grateful Dead, from their 1970 album American Beauty. The song was composed by bassist Phil Lesh and lyricist Robert Hunter, and sung by Lesh. In later years, the song was a favorite and the crowd would shout 'Let Phil sing!' to hear the song."
)
s11_image = open('https://s3-us-west-1.amazonaws.com/towndcloud-seed/11.png')
s11_audio = open('https://s3-us-west-1.amazonaws.com/towndcloud-seed/11.mp3')
s11.image.attach(io: s11_image, filename: '11.png')
s11.audio.attach(io: s11_audio, filename: '11.mp3')
s11.save!

s12 = Song.new(
user_id: u12.id, 
title: "Pharaoh's Dance",
genre: "Jazz",
description: "Bitches Brew is a studio double album by American jazz musician Miles Davis, released on March 30, 1970, on Columbia Records. It continued his experimentation with electric instruments previously featured on his critically acclaimed album In a Silent Way."
)
s12_image = open('https://s3-us-west-1.amazonaws.com/towndcloud-seed/12.png')
s12_audio = open('https://s3-us-west-1.amazonaws.com/towndcloud-seed/12.mp3')
s12.image.attach(io: s12_image, filename: '12.png')
s12.audio.attach(io: s12_audio, filename: '12.mp3')
s12.save!


