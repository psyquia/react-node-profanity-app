lines_seen = set() # holds lines already seen
outfile = open("possible_fp.txt", "w", encoding="utf-8")
for line in open("temp-possible_fp.txt", "r", encoding="utf-8"):
    if line not in lines_seen: # not a duplicate
        outfile.write(line)
        lines_seen.add(line)
outfile.close()