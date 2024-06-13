import sgfmill.sgf
from .models import Tournois, Positions
import sgfmill
from sgfmill import sgf

def parseSgfFile(sgfContent):
    try:
        sgf_game = sgf.Sgf_game.from_string(sgfContent)
        root_node = sgf_game.get_root()

        event = root_node.get('EV')
        round = root_node.get('RO')
        black_player = root_node.get('PB')
        black_rank = root_node.get('BR')
        white_player = root_node.get('PW')
        white_rank = root_node.get('WR')
        komi = root_node.get('KM')
        result = root_node.get('RE')
        date = root_node.get('DT')

        sgfMetadata = Tournois(
            event=event,
            round=round,
            black_player=black_player,
            black_rank=black_rank,
            white_player=white_player,
            white_rank=white_rank,
            komi=komi,
            result=result,
            date=date
        )

        sgfMetadata.save()

        for variation in sgf_game.get_main_sequence():
            for prop in variation :
                position_string = str(prop) 
                player = position_string[0]
                position = position_string[2:4]
                if player == 'B' :
                    player = 'black'
                else : 
                    player = 'white'
                Positions.objects.create(sgf_metadata=sgfMetadata, positions=position, player=player)

        print("SGF Content parsed successfully!")
        
    except Exception as e:
        print(f"Error parsing SGF file: {e}")
